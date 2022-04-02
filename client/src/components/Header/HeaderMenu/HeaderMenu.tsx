import React, { FC, useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

//components
import { NavBarMenu } from './NavBarMenu';

//styles
import './header-menu.scss';

//actions
// import { openModalCart } from '../../../redux/actions/actionsModalCart';
import { openModal } from '../../../redux/actions/actionsModal';

//img & icons
import logo from '../../../assets/icons/logo.svg'
import cartBtnIcon from '../../../assets/icons/cartBtnIcon.svg';
import { R } from '../../../redux/reducers';

//types
import { TypeCartItem } from '../../../redux/types/typesCart';
import { TypesModal } from '../../../redux/types/typesModal';


export const HeaderMenu: FC = () => {

	const isActiveClassName = ({ isActive }: { isActive: boolean }) => isActive ? 'header-menu__logo-wrapper header-menu__list__item header-menu__list__item_active' : 'header-menu__logo-wrapper header-menu__list__item';
	const { cart } = useSelector((state: R) => state.reducerCart);
	const [totalPrice, setTotalPrice] = useState<number>(0);
	const dispatch = useDispatch();

	useEffect(() => {
		let price = 0;

		cart.forEach((item: TypeCartItem) => {
			price = price + (item.totalPrice * item.counter);
		});
		setTotalPrice(price);
	}, [cart]);

	const handlerOpenModalCart = (e: React.MouseEvent<HTMLButtonElement>) => {
		dispatch(openModal(TypesModal.modalCart));
		document.querySelector('body')!.classList.add('body-overflow-hidden');
	}

	return (
		<div className='container'>
			<div className='header-menu'>
				<NavLink to='/' className={isActiveClassName}>
					<img className='header-menu__logo' src={logo} alt='logo' />
					<span className='header-menu__company-name'>React Pizza</span>
				</NavLink>

				<div className='header-menu__wrapper'>
					<NavBarMenu />
				</div>

				<div className='header-menu__cart-btn-wrapper'>
					<button onClick={handlerOpenModalCart} className='header-menu__cart-btn'>
						<img className='header-menu__cart-btn__icon' src={cartBtnIcon} alt="cart" />
						<span className='header-menu__cart-btn__count'>{totalPrice} ₽</span>
					</button>
				</div>
			</div>
		</div>
	)
}