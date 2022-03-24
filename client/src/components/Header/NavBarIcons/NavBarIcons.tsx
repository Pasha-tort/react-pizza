import React, { FC } from 'react';

//img & icons
import {
	combo,
	desserts,
	drinks,
	pizza,
	sauces,
	snacks,
	stocks,
	sushi,
} from '.';

//styles
import './nav-bar-icons.scss';

export const NavBarIcons: FC = () => {

	const onHandlerClick = () => {

	}

	return (
		<>
			<div className='container nav-bar-icons'>
				<nav className='nav-bar-icons__wrapper'>
					<ul className='nav-bar-icons__list'>
						<li className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={stocks} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Акции</span>
						</li>
						<li className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={pizza} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Пицца</span>
						</li>
						<li className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={sushi} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Суши</span>
						</li>
						<li className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={drinks} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Напитки</span>
						</li>
						<li className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={snacks} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Закуски</span>
						</li>
						<li className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={combo} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Комбо</span>
						</li>
						<li className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={desserts} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Десерты</span>
						</li>
						<li className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={sauces} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Соусы</span>
						</li>
					</ul>
				</nav>
			</div>
		</>
	)
}