import { NextFunction, Request, Response} from 'express';
import fs from 'fs';
import path from 'path';

import {get} from './decorators/routes';
import {controller} from './decorators/controller';

//path
const pathData = path.resolve(path.dirname(path.dirname(__dirname))) + '/data';

enum TypeProducts {
	pizza = 'pizza',
	rolls = 'rolls',
	snacks = 'snacks',
	desserts = 'desserts',
	drinks = 'drinks',
	saucess = 'saucess',
}

enum TypeDataFile {
	pizza = 'dataPizza.json',
	rolls = 'dataRolls.json',
	snacks = 'dataSnacks.json',
	desserts = 'dataDesserts.json',
	drinks = 'dataDrinks.json',
	saucess = 'dataSaucess.json',
}

async function readJSONFile(dataFile: TypeDataFile): Promise<string> {
	return new Promise((res, rej) => {
		fs.readFile(path.join(pathData, dataFile), 'utf-8', (err, data) => {
			if (err) rej();
			res(data);
		});
	});
}

function filtration(filterActive: string, data: string) {
	const arrFilterActive = filterActive.split(',');
	const dataObj: DataFile = JSON.parse(data);

	const newProductList = dataObj.data.filter(item => {
		let result = true;
		const objResemblance: TypeObjResemblance = {};
		
		for(let i = 0; i < arrFilterActive.length; i++) {
			const currentFilter = arrFilterActive[i];
			objResemblance[currentFilter] = false;

			item.composition.forEach(item => {
				if (item === currentFilter) {
					objResemblance[currentFilter] = true;
				}
			});
		}
		
		const arrResult = Object.values(objResemblance);
		for(let i = 0; i < arrResult.length; i++) {
			if (arrResult[i] === false) {
				result = false;
				break;
			}
			continue;
		}

		return result;
	});

	dataObj.data = newProductList;
	return JSON.stringify(dataObj);
}

type TypeItem = {
	composition: string[],
}
type TypeJsonFile = string;
type DataFile = {
	data: TypeItem[],
}
type TypeObjResemblance = {
	[id: string]: boolean;
}

@controller('/products')
class productsController {

	@get('/:typeProduct')
	async getProduct(req: Request, res: Response) {
		try {
			const {typeProduct} = req.params;
			const filterActive = req.query.filter as string;
			let products: string;
			let data: TypeJsonFile;

			switch (typeProduct) {

				case TypeProducts.pizza:
					data = await readJSONFile(TypeDataFile.pizza);
					if (!filterActive) {
						products = data;
					} else {
						products = filtration(filterActive, data);
					}
					break;
				case TypeProducts.rolls:
					data = await readJSONFile(TypeDataFile.rolls);
					if (!filterActive) {
						products = data;
					} else {
						products = filtration(filterActive, data);
					}
					break;

				case TypeProducts.snacks:
					products = await readJSONFile(TypeDataFile.snacks);
					break;

				case TypeProducts.desserts:
					products = await readJSONFile(TypeDataFile.desserts);
					break;

				case TypeProducts.drinks:
					products = await readJSONFile(TypeDataFile.drinks);
					break;

				case TypeProducts.saucess:
					products = await readJSONFile(TypeDataFile.saucess);
					break;

				default:
					products = '';
					break;
			}

			res.json(products)
		} catch (e) {
			console.log(e);
			res.status(501).send();
		}
	}
	
}

