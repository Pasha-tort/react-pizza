import React, { FC } from 'react';

//styles
import './header-menu.scss';

//img & icons
import logo from '../../../assets/icons/logo.svg'
import cartBtnIcon from '../../../assets/icons/cartBtnIcon.svg';

export const HeaderMenu: FC = () => {

	const handlerClick = () => {
		
	}

	return(
		<div className='container'>
			<div className='header-menu'>
				<div className='header-menu__logo-wrapper'>
					<img className='header-menu__logo' src={logo} alt='logo'/>
					<span className='header-menu__company-name'>React Pizza</span>
				</div>

				<div className='header-menu__empty-nav'></div>

				<div className='header-menu__cart-btn-wrapper'>
					<button onClick={handlerClick} className='btn btn_orange header-menu__btn-admin'>
						Открыть админ. панель
					</button>
					<button className='header-menu__cart-btn'>
						<img className='header-menu__cart-btn__icon' src={cartBtnIcon} alt="cart"/>
						<span className='header-menu__cart-btn__count'>0</span>
						<span className='header-menu__cart-btn__icon-currency'>&nbsp;&#8381;</span>
					</button>
				</div>
			</div>
		</div>
	)
}