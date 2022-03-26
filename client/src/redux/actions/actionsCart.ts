//types
import { TypesReducerCart } from '../types/typesCart';
import {TypeOrderListItem} from '../types/typesCart';

const addToCart = (res: TypeOrderListItem) => {
	return {
		type: TypesReducerCart.addToCart,
		payload: res,
	}
}

export {
	addToCart
}