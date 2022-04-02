import React from 'react';
import { useSelector } from 'react-redux';

//components
import { OrderList, OrderListItem } from '../components/Cart';

//style
import '../components/Cart/order.scss';

//types
import { R } from '../redux/reducers';

export const CartPage = () => {

	const { cart } = useSelector((state: R) => state.reducerCart);

	return (
		<div className='order'>
			{
				cart.length === 0 ? <span className='order__empty-cart'>Корзина Пуста</span>
					:
					<OrderList>
						{
							cart.map(item => {
								return <OrderListItem key={item.type + item.id} data={item} />
							})
						}
					</OrderList>
			}
		</div>
	)
}