import { TypesReducerModalOrder, TypeStateModalOrder, TypesActionsModalOrder } from '../types/typesModalOrder';

const initialState = {
	dataModalOrder: null
}

export const reducerModalOrder = (state: TypeStateModalOrder  = initialState, action: TypesActionsModalOrder): TypeStateModalOrder => {
	switch(action.type) {
		case TypesReducerModalOrder.definitionDataModalOrder:
			return {
				...state,
				dataModalOrder: action.payload,
			}
		default:
			return state;
	}
}