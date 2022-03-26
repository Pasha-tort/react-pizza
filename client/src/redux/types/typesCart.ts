//reducer
export enum TypesReducerCart {
	addToCart = 'ADD_TO_CART',
}

export type TypeOrderListItem = {
	id: string,
	imgUrl: string,
	productName: string,
	desc: string,
	price: number,
}

export type CartItem = TypeOrderListItem[];

export type TypeCartState = {
	cart: CartItem | [],
}

//actions
export type TypesActionsCart = {
	type: TypesReducerCart,
	payload?: TypeOrderListItem
}