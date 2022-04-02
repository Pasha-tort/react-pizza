import React, { FC, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';

//components
import { GridProducts } from '../GridProducts';
import { Card } from '../Cards';
import { SpinnerHorizontal } from '../Spinner';

//hooks
import { useHttp } from '../../hooks/useHttp';

//actions
import { openModal } from '../../redux/actions/actionsModal';
import { setFilterData, setTypeFilter } from '../../redux/actions/actionsFilter';

//styles
import '../../scss/variables.scss';
import './section-products.scss';

//img & icons
import filtersIcon from '../../assets/icons/filters.svg';

//types
import { R } from '../../redux/reducers/index';
import { CardType } from '../../redux/types/typesCart';
import { TypesModal } from '../../redux/types/typesModal';
import { CardItem } from '../Cards/Card';

type PropsSectionProducts = {
	typeProduct: CardType,
	number?: number,
	filters?: boolean,
}

type TypeProductsList = CardItem[];
type TypeFetched = {
	data: TypeProductsList,
	title: string,
	allComposition?: string[],
}

export const SectionProducts: FC<PropsSectionProducts> = ({ typeProduct, number, filters = true }) => {

	const [productsList, setProductsList] = useState<TypeProductsList | null>(null!);
	const [title, setTitle] = useState<string>(null!);
	const [filterList, setFilterList] = useState<string[]>(null!);

	const { activeFilter, typeFilter } = useSelector((state: R) => state.reducerFilter);
	const { request, loading } = useHttp();
	const dispatch = useDispatch();

	const requestProducts = useCallback(async (typeProduct: CardType, params: string[] = []) => {
		let fetched: TypeFetched;

		if (filters) {
			const query = params.join(',');
			fetched = await request(`/products/${typeProduct}?filter=${query}`);
		} else {
			fetched = await request(`/products/${typeProduct}`);
		}

		if (number) {
			setProductsList(fetched.data.splice(0, number));
		} else {
			setProductsList(fetched.data);
		}
		if (fetched.allComposition) {
			setFilterList(fetched.allComposition);
			setTypeFilter(CardType[typeProduct]);
		}
		setTitle(fetched.title);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	useEffect(() => {
		if (!productsList || !filters || !typeFilter) {
			requestProducts(typeProduct);
		} else if (typeProduct === typeFilter && filters) {
			requestProducts(typeProduct, activeFilter);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [typeProduct, activeFilter]);

	const handlerOpenModalFilter = () => {
		document.querySelector('body')!.classList.add('body-overflow-hidden');
		dispatch(setFilterData(filterList));
		dispatch(setTypeFilter(typeProduct));
		dispatch(openModal(TypesModal.modalFilter));
	}

	return (
		<div className='section-products'>
			<div className='container'>
				<div className='section-products__header'>
					<h2 className='section-products__title'>
						{title}
					</h2>
					{
						filters ?
							<button className='section-products__filters-btn' onClick={handlerOpenModalFilter}>
								<img className='section-products__filters-icon' src={filtersIcon} alt="filters" />
								Фильтры
							</button>
							:
							null
					}
				</div>
				{
					productsList?.length === 0 ? <span>Нет потходящих вариантов</span> : !loading && productsList ?
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