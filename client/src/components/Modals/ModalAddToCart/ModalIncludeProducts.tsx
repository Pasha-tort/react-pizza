import React, { FC } from 'react';

//types
import { TypeIncludeProduct } from '../../../redux/types/typesModalCard';
import { TypeHandlerClickIncludeItem } from './ModalAddToCart';

type PropsModalIncludeProducts = {
	includeProducts: TypeIncludeProduct[],
	handler: TypeHandlerClickIncludeItem,
}

export const ModalIncludeProducts: FC<PropsModalIncludeProducts> = ({ includeProducts, handler }) => {

	return (
		<>
			{
				includeProducts.map((item, i) => {
					const classNameItem = item.active ? 'modal__include__item__img modal__include__item__img_active' : 'modal__include__item__img';
					const imgUrl = `/img/modalCard/${i + 1}.svg`;

					return (
						<li key={item.productName} className='modal__include__item' >
							<label className='modal__include__item__label' htmlFor={`checkbox${i}`}>
								<img src={imgUrl} alt={item.productName} />
								<img src='/img/modalCard/activeIncludeProduct.svg' alt='active' className={classNameItem} />
							</label>
							<input className='modal__checkbox' type="checkbox" id={`checkbox${i}`} onClick={(e) => handler(e, i)} />
							<span className='modal__include__item__name'>{item.productName}</span>
							<span className='modal__include__item__price'>{item.price} ₽</span>
						</li>
					)
				})
			}
		</>
	)
}