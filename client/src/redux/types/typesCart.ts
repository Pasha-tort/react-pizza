import {TypeCartItemExtended} from './typesModalCard';

//reducer
export enum TypesReducerCart {
	addToCart = 'ADD_TO_CART',
	increment = 'INCREMENT',
	decrement = 'DECREMENT',
}

export enum CardType {
	pizza = 'pizza',
	rolls = 'rolls',
	snacks = 'snacks',
	drinks = 'drinks',
	desserts = 'desserts',
	saucess = 'saucess',
}

export type TypeOrderListItem = {
	id: string,
	type: CardType,
	counter: number,
	imgUrl: string,
	productName: string,
	composition?: string[],
	desc?: string,
	totalPrice: number,
}	

export enum TypeOperationCounter {
	increment = 'increment',
	decrement = 'decrement',
}

export interface DataCounter {
	count: number,
	id: string,
	type: CardType,
}

export const isTypeCartItemUsual = (data: any): data is TypeOrderListItem => {
	const {id, imgUrl, productName, totalPrice, counter, desc, composition} = data;
	if (id && imgUrl && productName && totalPrice && counter && desc && composition) {
		return true;
	} else {
		return false;
	}
}

export type TypeCartItem = TypeOrderListItem | TypeCartItemExtended;

export type Cart = TypeOrderListItem[] | TypeCartItemExtended[];

export type TypeCartState = {
	cart: Cart | [],
}

//actions
export type TypesActionsCart = {
	type: TypesReducerCart,
	payload: TypeCartItem | DataCounter,
}