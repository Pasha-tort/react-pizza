import React, { FC } from 'react';

import { HeaderInfo, HeaderMenu } from './';

import './header.scss';

export const Header: FC = () => {
	return (
		<>
			<header>
				<div className='header__wrapper'>
					<HeaderInfo />
				</div>
			</header>
			<div className='header__wrapper header__wrapper_sticky'>
				<HeaderMenu />
			</div>
		</>
	)
}