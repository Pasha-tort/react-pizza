import React, { FC, useEffect, useState } from 'react';

//components
import { GridProducts } from '../GridProducts';
import { Card } from '../Cards';
import { SpinnerHorizontal } from '../Spinner';

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
import { CardItem } from '../Cards/Card';

type PropsSectionProducts = {
	typeProduct: TypeSectionProduct,
	number?: number,
	filters?: boolean,
}

type TypeProductsList = CardItem[];

export const SectionProducts: FC<PropsSectionProducts> = ({ typeProduct, number, filters = true }) => {

	const [productsList, setProductsList] = useState<TypeProductsList | null>(null!);
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

	return (
		<div className='section-products'>
			<div className='container'>
				<div className='section-products__header'>
					<h2 className='section-products__title'>
						{title}
					</h2>
					{
						filters ?
							<button className='section-products__filters-btn'>
								<img className='section-products__filters-icon' src={filtersIcon} alt="filters" />
								Фильтры
							</button>
							:
							null
					}
				</div>

				{
					productsList && !loading ?
						<GridProducts>
							{
								productsList.map((item, i) => {
									return (
										<Card key={i} data={item} />
									)
								})
							}
						</GridProducts>
						:
						<SpinnerHorizontal />
				}
			</div>
		</div>
	)
}