//reducer
export enum TypesReducerModalCart {
	openModalCart = 'OPEN_MODAL_CART',
	closeModalCart = 'CLOSE_MODAL_CART',
}

export type TypeStateModalCart = {
	openModalCart: boolean,
}

//actions

export type TypesActionsModalCart = {
	type: TypesReducerModalCart,
}