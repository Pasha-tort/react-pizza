import React, { FC, useEffect } from 'react';

//types
type PropsOrderList = {
	children: React.ReactNode
}

export const OrderList: FC<PropsOrderList> = ({ children }) => {

	useEffect(() => {

	}, [children]);

	return (
		<>
			<h2 className='order__title'>
				Ваш заказ
			</h2>
			<ul className='order__list'>
				{
					children
				}
			</ul>
		</>
	)
}