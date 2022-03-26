//types
import { TypesReducerCart, TypeOrderListItem } from '../types/typesCart';

const addToCart = (res: TypeOrderListItem) => {
	return {
		type: TypesReducerCart.addToCart,
		payload: res,
	}
}

export {
	addToCart,
}