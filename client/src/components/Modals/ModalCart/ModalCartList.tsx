import React, { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';

//components
import { ModalCartListItem } from './ModalCartListItem';


//types
import { R } from '../../../redux/reducers';

export const ModalCartList: FC = () => {

	const { cart } = useSelector((state: R) => state.reducerCart);

	useEffect(() => {

	}, [cart]);

	return (
		<>
			{
				cart.map(item => {
					return <ModalCartListItem key={item.type + item.id + item.totalPrice} data={item} />
				})
			}
		</>
	)
}