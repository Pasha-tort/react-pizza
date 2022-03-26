import { TypeModaCardState, TypesReducerModalCard, TypesActionsModalCard, TypeModalCardItem } from '../types/typesModalCard'

const initialState = {
	openModalCard: false,
	dataModalCard: {},
	includeProducts: []
}

const isTypeModalCardItem = (data: any): data is TypeModalCardItem => {
	const {id, imgUrl, productName, price} = data;
	if (id && imgUrl && productName && price) {
		return true;
	} else {
		return false;
	}
}

export const reducerModalCard = (state: TypeModaCardState  = initialState, action: TypesActionsModalCard): TypeModaCardState => {
	switch(action.type) {
		case TypesReducerModalCard.openModalCard:
			return {
				...state,
				openModalCard: true,
			}
		case TypesReducerModalCard.closeModalCard:
			return {
				...state,
				openModalCard: false,
			}
		case TypesReducerModalCard.defineDataModalCard:
			return {
				...state,
				dataModalCard: action.payload!
			}
		case TypesReducerModalCard.defineIncludeProductsModalCard:
			if (Array.isArray(action.payload)) {
				return {
					...state,
					includeProducts: [...action.payload],
				}
			} else {
				return state;
			}
		case TypesReducerModalCard.setPriceModalCard:
			const desiredProduct = state.includeProducts.find((item, i) => action.payload === i);
			
			const f = (valueBoolean: boolean, valueTotal: number, valueChanges: number) => {
				const arr = state.includeProducts.map((item, i) => {
					if (i === action.payload) {
						return {
							...item,
							active: valueBoolean,
						}
					} else {
						return item;
					}
				});
				return {
					...state,
					dataModalCard: {
						...state.dataModalCard,
						price:  valueBoolean ? valueTotal + valueChanges : valueTotal - valueChanges,
					},
					includeProducts: [...arr],
				}
			}
			
			if (isTypeModalCardItem(state.dataModalCard)) {
				if (!desiredProduct!.active) {
					return f(true, state.dataModalCard.price, desiredProduct!.price);
				} else {
					return f(false, state.dataModalCard.price, desiredProduct!.price);
				}
			} else {
				return state;
			}
		default:
			return state;
	}
}