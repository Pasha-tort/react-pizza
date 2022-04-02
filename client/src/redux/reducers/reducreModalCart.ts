import { TypeStateModalCart, TypesReducerModalCart, TypesActionsModalCart } from '../types/typesModalCart';

const initialState = {
	openModalCart: false
}

export const reducerModalCart = (state: TypeStateModalCart  = initialState, action: TypesActionsModalCart): TypeStateModalCart => {
	switch(action.type) {
		case TypesReducerModalCart.openModalCart:
			return {
				...state,
				openModalCart: true,
			}
		case TypesReducerModalCart.closeModalCart:
			return {
				...state,
				openModalCart: false,
			}
		default:
			return state;
	}
}