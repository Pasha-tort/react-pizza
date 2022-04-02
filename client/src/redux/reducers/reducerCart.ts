import { TypesActionsCart, TypeCartState, TypesReducerCart, TypeCartItem, DataCounter} from '../types/typesCart';
import { isTypeCartItemExtended, TypeCartItemExtended, TypeIncludeProduct } from '../types/typesModalCard';

const initialState = {
	cart: []
}

const comparisonCartItemExtended = (cartItem1: TypeCartItemExtended, cartItem2: TypeCartItemExtended): boolean => {
	let result: boolean = true;

	const comparisonIncludeProduct = (arr1: TypeIncludeProduct[], arr2: TypeIncludeProduct[]): void | null => {
		arr1 = arr1.filter(item => item.active);
		arr2 = arr2.filter(item => item.active);

		if (arr1.length !== arr2.length) {
			result = false;
			return null;
		};
		const objComparison: any = {

		}
		for(let i = 0; i < arr1.length; i++) {
			const product1 = arr1[i].productName;
			if (objComparison[product1]) {
				objComparison[product1]++; 
			}
			objComparison[product1] = 1;

			const product2 = arr2[i].productName;
			if (objComparison[product2]) {
				objComparison[product2]++; 
			}
			objComparison[product2] = 1;
		}
	}

	comparisonIncludeProduct(cartItem1.includeProducts, cartItem2.includeProducts);
	if (cartItem1.typeDough !== cartItem2.typeDough) result = false;
	return result;
}

export const reducerCart = (state: TypeCartState  = initialState, action: TypesActionsCart): TypeCartState => {
	switch(action.type) {
		case TypesReducerCart.addToCart:
			const newCartItem = action.payload as TypeCartItem;
			let repeat = false;

			const newCart = state.cart.map((item, i) => {
				if (isTypeCartItemExtended(item) && isTypeCartItemExtended(newCartItem)) {
					
					if (item.type === newCartItem.type && item.id === newCartItem.id && comparisonCartItemExtended(item, newCartItem)) {
						repeat = true
						item.counter++;
						return item;
					} else return item;

				} else if (item.type === newCartItem.type && item.id === newCartItem.id) {
					repeat = true
					item.counter++;
					return item;
				} else return item;
			});

			if (repeat) {
				return {
					...state,
					cart: [
						...newCart,
					]
				}
			}
			return {
				...state,
				cart: [
					...state.cart,
					newCartItem,
				],
			}
		case TypesReducerCart.increment:
			const dataReceivedInc = action.payload as DataCounter;
			const dataInc = {
				count: dataReceivedInc.count,
				type: dataReceivedInc.type,
				id: dataReceivedInc.id,
			}
			const cartInc = state.cart.map((item) => {
				if (item.id === dataInc.id && item.type === dataInc.type) {
					return {
						...item,
						counter: dataInc.count + 1,
					}
				} else {
					return item;
				}
			});
			return {
				...state,
				cart: cartInc,
			}
		case TypesReducerCart.decrement:
			const dataReceivedDec = action.payload as DataCounter;
			const dataDec = {
				count: dataReceivedDec.count,
				type: dataReceivedDec.type,
				id: dataReceivedDec.id,
			}
			const cartDec = state.cart.map((item) => {
				if (item.id === dataDec.id && item.type === dataDec.type) {
					return {
						...item,
						counter: dataDec.count - 1,
					}
				} else {
					return item;
				}
			}).filter(item => item.counter);
			return {
				...state,
				cart: cartDec,
			}
		default:
			return state;
	}
}