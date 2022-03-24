import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

//components
import { NavBarMenu } from './NavBarMenu';

//styles
import './header-menu.scss';

//img & icons
import logo from '../../../assets/icons/logo.svg'
import cartBtnIcon from '../../../assets/icons/cartBtnIcon.svg';

export const HeaderMenu: FC = () => {

	const isActiveClassName = ({ isActive }: { isActive: boolean }) => isActive ? 'header-menu__logo-wrapper header-menu__list__item header-menu__list__item_active' : 'header-menu__logo-wrapper header-menu__list__item';

	return (
		<div className='container'>
			<div className='header-menu'>
				<NavLink to='/' className={isActiveClassName}>
					<img className='header-menu__logo' src={logo} alt='logo' />
					<span className='header-menu__company-name'>React Pizza</span>
				</NavLink>

				<div className='header-menu__wrapper'>
					{/* {
						checkHeaderMenu ? <NavBarMenu /> : null
					} */}
					<NavBarMenu />
				</div>

				<div className='header-menu__cart-btn-wrapper'>
					<button className='header-menu__cart-btn'>
						<img className='header-menu__cart-btn__icon' src={cartBtnIcon} alt="cart" />
						<span className='header-menu__cart-btn__count'>0</span>
						<span className='header-menu__cart-btn__icon-currency'>&nbsp;&#8381;</span>
					</button>
				</div>
			</div>
		</div>
	)
}