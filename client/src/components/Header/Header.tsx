import React, { FC } from 'react';

import { HeaderMenu } from './';

import './header.scss';

export const Header: FC = () => {
	return (
		<>
			<header className='header__wrapper header__wrapper_sticky'>
				<HeaderMenu />
			</header>
		</>
	)
}