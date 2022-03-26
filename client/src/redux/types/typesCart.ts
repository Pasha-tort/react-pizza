import { CardType } from '../../components/Cards/Card';

//reducer
export enum TypesReducerCart {
	addToCart = 'ADD_TO_CART',
}

export type TypeOrderListItem = {
	id: string,
	type: CardType,
	imgUrl: string,
	productName: string,
	desc: string,
	price: number,
}

type Cart = TypeOrderListItem[];

export type TypeCartState = {
	cart: Cart | [],
}

//actions
export type TypesActionsCart = {
	type: TypesReducerCart,
	payload?: TypeOrderListItem
}