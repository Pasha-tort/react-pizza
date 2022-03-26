import React from 'react';
import { NavLink } from 'react-router-dom';

export const NavBarMenu = () => {

	const isActiveClassName = ({ isActive }: { isActive: boolean }) => isActive ? 'header-menu__list__item header-menu__list__item_active' : 'header-menu__list__item';

	return (
		<nav className='header-menu__nav'>
			<ul className='header-menu__list'>
				<li className='header-menu__list__item'>
					Акции
				</li>
				<li >
					<NavLink to="/pizza" className={isActiveClassName}>
						Пицца
					</NavLink>
				</li>
				<li>
					<NavLink to="/rolls" className={isActiveClassName}>
						Роллы
					</NavLink>
				</li>
				<li>
					<NavLink to="/drinks" className={isActiveClassName}>
						Напитки
					</NavLink>
				</li>
				<li>
					<NavLink to="/snacks" className={isActiveClassName}>
						Закуски
					</NavLink>
				</li>
				<li className='header-menu__list__item'>
					Комбо
				</li>
				<li>
					<NavLink to="/desserts" className={isActiveClassName}>
						Десерты
					</NavLink>
				</li>
				<li>
					<NavLink to="/saucess" className={isActiveClassName}>
						Соусы
					</NavLink>
				</li>
			</ul>
		</nav>
	)
}