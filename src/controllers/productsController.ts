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

async function readJSONFile(dataFile: TypeDataFile) {
	return new Promise((res, rej) => {
		fs.readFile(path.join(pathData, dataFile), 'utf-8', (err, data) => {
			if (err) rej();
			res(data);
		})
	})
}

@controller('/products')
class productsController {

	@get('/:typeProduct')
	async getProduct(req: Request, res: Response) {
		try {
			const {typeProduct} = req.params;
			let products;

			switch (typeProduct) {

				case TypeProducts.pizza:
					products = await readJSONFile(TypeDataFile.pizza);
					break;

				case TypeProducts.rolls:
					products = await readJSONFile(TypeDataFile.rolls);
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

