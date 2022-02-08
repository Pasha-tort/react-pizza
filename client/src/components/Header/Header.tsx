import React, { FC } from 'react';

import { HeaderInfo, HeaderMenu, NavBarIcons } from './';

import './header.scss';

export const Header: FC = () => {
	return (
		<>
			<header className='header'>
				<div className='header__wrapper'>
					<HeaderInfo/>
				</div>
				<div className='header__wrapper'>
					<HeaderMenu/>
				</div>
			</header>

			<NavBarIcons/>
		</>
	)
}