import React, { FC } from 'react';

import { HeaderInfo, HeaderMenu, NavBarIcons } from './';

import './header.scss';

export const Header: FC = () => {
	return (
		<>
			<header className='header'>
				<HeaderInfo/>
				<div className='header__line'></div>
				<HeaderMenu/>
			</header>

			<NavBarIcons/>
		</>
	)
}