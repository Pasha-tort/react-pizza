import React, { FC, useEffect, useState } from 'react';

//components
import { GridProducts } from '../GridProducts';
import { Card } from '../Cards';

//hooks
import { useHttp } from '../../hooks/useHttp';

//styles
import '../../scss/variables.scss';
import './section-products.scss';

//img & icons
import filtersIcon from '../../assets/icons/filters.svg';

//types
import { TypeSectionProduct } from './types';
import { useCallback } from 'react';

type PropsSectionProducts = {
	typeProduct: TypeSectionProduct,
	number?: number,
}

type TypeProduct = {
	imgUrl: string,
	productName: string,
	composition: string[],
	price: number | number[],
}

type TypeProducts = TypeProduct[];

export const SectionProducts: FC<PropsSectionProducts> = ({ typeProduct, number }) => {

	const [productsList, setProductsList] = useState<TypeProducts | null>(null!);
	const { request, loading } = useHttp();
	const [title, setTitle] = useState<string>('');

	const requestProducts = useCallback(async (typeProduct: TypeSectionProduct) => {
		const fetched = await request(`/products/${typeProduct}`);
		if (number) {
			setProductsList(fetched.data.splice(0, 8));
		}
		setTitle(fetched.title);
		setProductsList(fetched.data);
	}, [request, number]);

	useEffect(() => {
		console.log('render')
		requestProducts(typeProduct);
	}, [requestProducts, typeProduct]);

	const content = loading ? 'loading...' :
		!productsList ? null :
			productsList.map((item, i) => {
				return (
					<Card key={i} data={item} />
				)
			});

	return (
		<div className='section-products'>
			<div className='container'>
				<div className='section-products__header'>
					<h2 className='section-products__title'>
						{title}
					</h2>

					<button className='section-products__filters-btn'>
						<img className='section-products__filters-icon' src={filtersIcon} alt="filters" />
						Фильтры
					</button>
				</div>

				<GridProducts>
					{
						content
					}
				</GridProducts>
			</div>
		</div>
	)
}