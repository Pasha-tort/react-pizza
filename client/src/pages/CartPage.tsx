import React from 'react';
import { useSelector } from 'react-redux';

//components
import { OrderList, OrderListItem, OrderAdd, OrderInfo } from '../components/Cart';

//types
import { R } from '../redux/reducers';

export const CartPage = () => {

	const { cart } = useSelector((state: R) => state.reducerCart);

	return (
		<>
			<OrderList>
				{
					cart.map(item => {
						return <OrderListItem data={item} />
					})
				}
			</OrderList>
			<OrderAdd />
			<OrderAdd />
			<OrderInfo />
		</>
	)
}