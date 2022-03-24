import React from 'react';

//img & icons
import logo from '../../assets/icons/logo.svg';

//styles
import './footer.scss';

export const Footer = () => {

	return (
		<footer className='footer__section'>
			<div className='footer__wrapper container'>

				<div className='footer__logo-wrapper'>
					<img className='footer__logo' src={logo} alt='logo' />
					<span className='footer__company-name'>React Pizza</span>
				</div>

				<div className='footer__about'>
					<span className='footer__title'>
						React Pizza
					</span>
					<ul className='footer__list'>
						<li className='footer__list__item'>О компании</li>
						<li className='footer__list__item'>Пользовательское соглашение</li>
						<li className='footer__list__item'>Условия гарантии</li>
					</ul>
				</div>

				<div className='footer__help'>
					<span className='footer__title'>
						Помощь
					</span>
					<ul className='footer__list'>
						<li className='footer__list__item'>Ресторан</li>
						<li className='footer__list__item'>Контакты</li>
						<li className='footer__list__item'>Поддержка</li>
						<li className='footer__list__item'>Отследить заказы</li>
					</ul>
				</div>

				<div className='footer__contacts'>
					<span className='footer__title'>
						Контакты
					</span>
					<ul className='footer__list'>
						<li className='footer__list__item'></li>
						<li className='footer__list__item'></li>
						<li className='footer__list__item'></li>
					</ul>
				</div>

			</div>
			<span className='footer__copirate'>
				© Copyright 2022 — React Pizza
			</span>
		</footer>
	)
}