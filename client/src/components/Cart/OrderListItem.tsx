import React, { FC } from 'react';

//types
import { TypeOrderListItem } from '../../redux/types/typesCart';

type PropsOrderListItem = {
	data: TypeOrderListItem,
}

export const OrderListItem: FC<PropsOrderListItem> = ({ data }) => {

	return (
		<>
			order list item
		</>
	)
}