//types
import { TypesReducerCart, TypeCartItem, DataCounter } from '../types/typesCart';

const addToCart = (res: TypeCartItem) => {
	return {
		type: TypesReducerCart.addToCart,
		payload: res,
	}
}

const increment = (res: DataCounter) => {
	return {
		type: TypesReducerCart.increment,
		payload: res,
	}
}

const decrement = (res: DataCounter) => {
	return {
		type: TypesReducerCart.decrement,
		payload: res,
	}
}

export {
	addToCart,
	increment,
	decrement,
}