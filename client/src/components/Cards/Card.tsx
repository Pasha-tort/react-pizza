import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuid } from 'uuid';

import '../../typings/uuid.d.ts';

//components
import { SpinnerCircle } from '../Spinner';

//actions
import { addToCart } from '../../redux/actions/actionsCart';
import { defineDataModalCard } from '../../redux/actions/actionsModalCard';
import { openModal } from '../../redux/actions/actionsModal';
import { addMessage } from '../../redux/actions/actionsMessage';

//styles
import './card.scss';

//types
import { CardType, TypeOrderListItem } from '../../redux/types/typesCart';
import { TypesModal } from '../../redux/types/typesModal';

export type CardItem = {
	id: string,
	type: CardType,
	imgUrl: string,
	productName: string,
	composition?: string[],
	desc: string,
	includeComposition?: string[],
	price: number | number[],
}

type TypeDataCard = {
	data: CardItem,
}

function isArrayPrice(price: any): price is Array<number> {
	return price.length !== undefined;
}

export const Card: FC<TypeDataCard> = ({ data }) => {

	const [loading, setLoading] = useState<boolean>(true);
	const dispatch = useDispatch();

	const loadImg = () => {
		setLoading(false)
	}

	const onHandlerClickCard = (e: React.MouseEvent<HTMLButtonElement>, dataCard: CardItem) => {
		if (dataCard.type === CardType.pizza && Array.isArray(dataCard.price)) {
			const dataModalCard = {
				id: dataCard.id,
				counter: 1,
				imgUrl: dataCard.imgUrl,
				type: dataCard.type,
				productName: dataCard.productName,
				listPrice: dataCard.price,
				basePrice: dataCard.price[0],
				totalPrice: dataCard.price[0],
				additionalPrice: 0,
				includeProducts: dataCard.includeComposition,
			}

			dispatch(openModal(TypesModal.modalAddToCart));
			document.querySelector('body')!.classList.add('body-overflow-hidden');
			dispatch(defineDataModalCard(dataModalCard));

		} else if (!Array.isArray(dataCard.price)) {
			const dataCartItem: TypeOrderListItem = {
				id: dataCard.id,
				counter: 1,
				desc: dataCard.desc,
				type: dataCard.type,
				imgUrl: dataCard.imgUrl,
				composition: dataCard.composition,
				productName: dataCard.productName,
				totalPrice: dataCard.price,
			}
			const message = {
				text: 'Добавлен в корзину',
				id: uuid(),
			}
			dispatch(addMessage(message))
			dispatch(addToCart(dataCartItem));
		}

	}

	useEffect(() => {

	}, [loading]);

	return (
		<>
			<li className='card'>
				<div className='card__img__wrapper'>
					<img onLoad={loadImg} className='card__img' src={data.imgUrl} alt={data.productName} />
				</div>
				<div className='card__desc'>
					<span className='card__product-name'>{data.productName}</span>
					{
						data.composition ? <span className='card__composition'>{data.composition.join(', ')}</span> : null
					}
					{
						data.desc ? <span className='card__info'>{data.desc}</span> : null
					}
					<div className='card__footer'>
						<button onClick={(e) => onHandlerClickCard(e, data)} className='card__btn btn btn_orange'>Выбрать</button>
						{
							isArrayPrice(data.price) ? <span className='card__price'>от {data.price[0]} &#8381;</span> : <span className='card__price'>{data.price} &#8381;</span>
						}
					</div>
				</div>
				<SpinnerCircle loading={loading} />
			</li>
		</>
	)
}