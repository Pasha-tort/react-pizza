import React, { FC, useEffect, useState } from 'react';

//components
import { Counter } from '../Counter';

//types
import { TypeCartItem, DataCounter, isTypeCartItemUsual } from '../../redux/types/typesCart';
import { isTypeCartItemExtended } from '../../redux/types/typesModalCard';
import { TypeIncludeProduct } from '../../redux/types/typesModalCard';

type PropsOrderListItem = {
	data: TypeCartItem,
}

export const OrderListItem: FC<PropsOrderListItem> = ({ data }) => {

	const [includeProducts, setIncludeProducts] = useState<TypeIncludeProduct[]>(null!);
	const [dataCounter, setDataCounter] = useState<DataCounter>(null!);

	useEffect(() => {
		if (isTypeCartItemExtended(data)) {
			const includeProducts = data.includeProducts.filter((item) => item.active);
			setIncludeProducts(includeProducts)
		}
		setDataCounter({
			count: data.counter,
			id: data.id,
			type: data.type,
		});
	}, [data]);

	return (
		<li className='order__item'>
			<img className='order__item__img' src={data.imgUrl} alt={data.productName} />
			<div className='order__item__desc__wrapper'>
				<div className='order__item__name'>{data.productName}</div>
				{
					!isTypeCartItemExtended(data) ? null :
						<>
							<div className='order__item__desc'>{data.typeDough}</div>
							<div className='order__item__desc'>{data.radius} см</div>
							<ul className='order__composition__list'>
								{
									includeProducts ? includeProducts.map((item, i) => {
										if (item.active) return <li key={item.price + item.productName} className='order__item__desc order__composition__item'>{i === 0 ? null : ', '}{item.productName}</li>
										return null;
									}) : null
								}
							</ul>
						</>
				}
				{
					!isTypeCartItemUsual(data) ? null :
						<>
							<div className='order__item__desc'>{data.desc}</div>
						</>
				}
			</div>
			{
				dataCounter ? <Counter data={dataCounter} /> : null
			}
			<div className='order__item__price'>{data.totalPrice * data.counter} ₽</div>
		</li>
	)
}