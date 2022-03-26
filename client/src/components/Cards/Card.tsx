import React, { FC, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

//components
import { SpinnerCircle } from '../Spinner';

//actions
import { addToCart } from '../../redux/actions/actionsCart';

//styles
import './card.scss';

//types
import { TypeOrderListItem } from '../../redux/types/typesCart';

type CardItem = {
	id: string,
	imgUrl: string,
	productName: string,
	composition?: string[],
	price: number | number[],
}

type typeDataCard = {
	data: CardItem,
}

function isArrayPrice(price: any): price is Array<number> {
	return price.length !== undefined;
}

export const Card: FC<typeDataCard> = ({ data }) => {

	const [loading, setLoading] = useState<boolean>(true);
	const dispatch = useDispatch();

	const loadImg = () => {
		setLoading(false)
	}

	const onHandlerCardToCart = (e: React.MouseEvent<HTMLButtonElement>, dataCard: CardItem) => {
		const dataCartItem: TypeOrderListItem = {
			id: dataCard.id,
			imgUrl: dataCard.imgUrl,
			productName: dataCard.productName,
			price: 350,
			desc: 'desc',
		}
		dispatch(addToCart(dataCartItem));
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
					<div className='card__footer'>
						<button onClick={(e) => onHandlerCardToCart(e, data)} className='card__btn btn btn_orange'>Выбрать</button>
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