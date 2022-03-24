import React, { FC } from 'react';

//styles
import './grid-products.scss';

type T = {
	children: React.ReactNode
}

export const GridProducts: FC<T> = ({ children }: { children: React.ReactNode }) => {
	return (
		<ul className='grid-products grid-products__4 grid-products_home'>
			{children}
		</ul>
	)
}