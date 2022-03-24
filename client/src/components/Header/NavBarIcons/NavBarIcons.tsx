import React, { FC } from 'react';
import { Link } from 'react-router-dom';

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

	return (
		<>
			<div className='container nav-bar-icons'>
				<nav className='nav-bar-icons__wrapper'>
					<ul className='nav-bar-icons__list'>
						<li className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={stocks} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Акции</span>
						</li>
						<Link to='/pizza' className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={pizza} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Пицца</span>
						</Link>
						<Link to="/rolls" className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={sushi} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Роллы</span>
						</Link>
						<Link to="/drinks" className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={drinks} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Напитки</span>
						</Link>
						<Link to="/snacks" className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={snacks} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Закуски</span>
						</Link>
						<li className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={combo} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Комбо</span>
						</li>
						<Link to="/desserts" className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={desserts} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Десерты</span>
						</Link>
						<Link to="/saucess" className='nav-bar-icons__list__item'>
							<img className='nav-bar-icons__list__item__icon' src={sauces} alt="nav_icon" />
							<span className='nav-bar-icons__list__item__desc'>Соусы</span>
						</Link>
					</ul>
				</nav>
			</div>
		</>
	)
}