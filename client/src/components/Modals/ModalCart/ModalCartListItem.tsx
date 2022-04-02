import React, { FC, useEffect, useState } from 'react';

//components
import { Counter } from '../../Counter';

//types
import { isTypeCartItemExtended, TypeIncludeProduct } from '../../../redux/types/typesModalCard';
import { TypeCartItem, isTypeCartItemUsual, DataCounter } from '../../../redux/types/typesCart';


type PropsItem = {
	data: TypeCartItem,
}

export const ModalCartListItem: FC<PropsItem> = ({ data }) => {

	const [includeProducts, setIncludeProducts] = useState<TypeIncludeProduct[]>(null!);
	const [dataCounter, setDataCounter] = useState<DataCounter>(null!);

	useEffect(() => {
		if (isTypeCartItemExtended(data)) {
			const activeIncludeProducts = data.includeProducts.filter(item => item.active);
			setIncludeProducts(activeIncludeProducts);
		}
		setDataCounter({
			count: data.counter,
			id: data.id,
			type: data.type,
		});
	}, [data]);

	return (
		<div className='modal-cart__item'>
			<img className='modal-cart__img' src={data.imgUrl} alt={data.productName} />
			<div className='modal-cart__item__info'>
				<div className='modal-cart__desc__wrapper'>
					<span className='modal-cart__name'>{data.productName}</span>
					{
						isTypeCartItemExtended(data) ?
							(
								<>
									<span className='modal-cart__desc'>{data.typeDough}</span>
									<span className='modal-cart__desc'>{data.radius} см</span>
									<span className='modal-cart__composition__list'>
										{
											includeProducts ? includeProducts.map(item => item.productName).join(', ') : null
										}
									</span>
								</>
							)
							: null
					}
					{
						isTypeCartItemUsual(data) ? data.composition ?
							(
								<>
									<span className='modal-cart__composition__list'>{data.composition.join(', ')}</span>
									<span className='modal-cart__desc'>{data.desc}</span>
								</>
							)
							:
							(
								<span className='modal-cart__desc'>{data.desc}</span>
							)
							: null
					}
				</div>
				<div className='modal-cart__item__footer'>
					{
						dataCounter ? <Counter data={dataCounter} /> : null
					}
					<div className='modal-cart__item__price'>{data.totalPrice * data.counter} ₽</div>
				</div>
			</div>
		</div>
	)
}