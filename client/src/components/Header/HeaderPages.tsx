import React, { FC } from 'react';

import { HeaderMenu } from './';

import './header.scss';

export const HeaderPages: FC = () => {
	return (
		<header className='header'>
			<div className='header__wrapper'>
				<HeaderMenu checkHeaderMenu={true} />
			</div>
		</header>
	)
}