import { TypeModaCardState, TypesReducerModalCard, TypesActionsModalCard, isTypeCartItemExtended } from '../types/typesModalCard'

const initialState = {
	openModalCard: false,
	dataModalCard: {},
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
				dataModalCard: action.payload!,
			}
		case TypesReducerModalCard.setAdditionalPriceModalCard:
			if (!isTypeCartItemExtended(state.dataModalCard)) return state;
			const desiredProduct = state.dataModalCard.includeProducts.find((item, i) => action.payload === i);
			
			const f = (valueBoolean: boolean, valueTotalAdditionalPrice: number, valueChanges: number) => {

				if (!isTypeCartItemExtended(state.dataModalCard)) return state;

				const arr = state.dataModalCard.includeProducts.map((item, i) => {
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
						additionalPrice:  valueBoolean ? valueTotalAdditionalPrice + valueChanges : valueTotalAdditionalPrice - valueChanges,
						includeProducts: [...arr],
						totalPrice: state.dataModalCard.basePrice + (valueBoolean ? valueTotalAdditionalPrice + valueChanges : valueTotalAdditionalPrice - valueChanges),
					},
				}
			}

			if (!desiredProduct!.active) {
				return f(true, state.dataModalCard.additionalPrice, desiredProduct!.price);
			} else {
				return f(false, state.dataModalCard.additionalPrice, desiredProduct!.price);
			}
		case TypesReducerModalCard.setBasePriceModalCard:
			if (!isTypeCartItemExtended(state.dataModalCard)) return state;
			return {
				...state,
				dataModalCard: {
					...state.dataModalCard,
					basePrice: action.payload!,
					totalPrice: action.payload as number + state.dataModalCard.additionalPrice
				}
			}
		default:
			return state;
	}
}