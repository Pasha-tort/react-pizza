import React, { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

//components
import { ModalCartList } from './ModalCartList';

//styles
import './modal-cart.scss';

//icons
import closeModal from '../../../assets/icons/closeModalRight.svg';

//types
import { R } from '../../../redux/reducers';
import { TypeHandlerCloseModal } from '../Modal';
import { TypeCartItem } from '../../../redux/types/typesCart';

type PropsModal = {
	handlerClose: TypeHandlerCloseModal,
}

export const ModalCart: FC<PropsModal> = ({ handlerClose }) => {

	const closeRefImg = useRef<HTMLImageElement>(null!);
	const closeRefAnch = useRef<HTMLAnchorElement>(null!);
	const { cart } = useSelector((state: R) => state.reducerCart);
	const [totalPrice, setTotalPrice] = useState<number>(0);

	useEffect(() => {
		let price = 0;

		cart.forEach((item: TypeCartItem) => {
			price = price + (item.totalPrice * item.counter);
		});
		setTotalPrice(price);
		return () => { };
	}, [cart]);

	return (
		<div className='modal-cart__wrapper'>
			<div className='modal-right__header'>
				<h3 className='modal-right__title'>Ваш заказ</h3>
				<img ref={closeRefImg} className='modal-right__close' src={closeModal} alt="close" onClick={(e) => handlerClose(e, closeRefImg.current)} />
			</div>

			<ul className='modal-cart__list'>
				<ModalCartList />
			</ul>
			<div className='modal-cart__footer'>
				<span className='modal-cart__price'>Итого: {totalPrice} ₽</span>
				<Link ref={closeRefAnch} to="/cart" className='modal-cart__btn btn btn_orange' onClick={(e) => handlerClose(e, closeRefAnch.current)}>Оформить заказ</Link>
			</div>
		</div>

	)
}