//reducer

export enum TypesReducerModalCard {
	openModalCard = 'OPEN_MODAL_CARD',
	closeModalCard = 'CLOSE_MODAL_CARD',
	defineDataModalCard = 'DEFINE_DATA_MODAL_CARD',
	defineIncludeProductsModalCard = 'DEFINE_INCLUDE_PRODUCT_MODAL_CARD',
	setPriceModalCard = 'SET_PRICE_MODAL_CARD',

}

export type TypeModalCardItem = {
	id: string,
	imgUrl: string,
	productName: string,
	price: number,
}

export type TypeModaCardState = {
	openModalCard: boolean,
	dataModalCard: TypeModalCardItem | {},
	includeProducts: TypeIncludeProducts | [],
}

type TypeIncludeProduct = {
	productName: string,
	price: number,
	active?: boolean,
}

export type TypeIncludeProducts = TypeIncludeProduct[];

//actions
export type TypesActionsModalCard = {
	type: TypesReducerModalCard,
	payload?: TypeIncludeProducts | TypeModalCardItem | number,
}