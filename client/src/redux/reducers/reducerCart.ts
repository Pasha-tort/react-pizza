import { TypesActionsCart, TypeCartState, TypesReducerCart } from '../types/typesCart';

const initialState = {
	cart: []
}

export const reducerCart = (state: TypeCartState  = initialState, action: TypesActionsCart): TypeCartState => {
	switch(action.type) {
		case TypesReducerCart.addToCart:
			return {
				...state,
				cart: [
					...state.cart,
					action.payload!
				],
			}
		default:
			return state;
	}
}