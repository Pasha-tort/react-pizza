import { CardType } from './typesCart'

//reducer

export enum TypesReducerModalCard {
	openModalCard = 'OPEN_MODAL_CARD',
	closeModalCard = 'CLOSE_MODAL_CARD',
	defineDataModalCard = 'DEFINE_DATA_MODAL_CARD',
	defineIncludeProductsModalCard = 'DEFINE_INCLUDE_PRODUCT_MODAL_CARD',
	setAdditionalPriceModalCard = 'SET_ADDITIONAL_PRICE_MODAL_CARD',
	setBasePriceModalCard = 'SET_BASE_PRICE_MODAL_CARD',
}

export enum TypesInputs {
	dough = 'dough',
	radius = 'radius',
}

export type TypeCartItemExtended = {
	id: string,
	imgUrl: string,
	counter: number,
	type: CardType,
	productName: string,
	includeProducts: TypeIncludeProduct[],
	listPrice: number[],
	basePrice: number,
	totalPrice: number,
	additionalPrice: number,
	typeDough?: string,
	radius?: string,
}

export type TypeModaCardState = {
	openModalCard: boolean,
	dataModalCard: TypeCartItemExtended | {},
}

export type TypeIncludeProduct = {
	productName: string,
	price: number,
	active?: boolean,
}

export const isTypeCartItemExtended = (data: any): data is TypeCartItemExtended => {
	const {id, imgUrl, productName, listPrice, basePrice, includeProducts, totalPrice} = data;
	if (id && imgUrl && productName && listPrice && basePrice && includeProducts && totalPrice) {
		return true;
	} else {
		return false;
	}
}

//actions
export type TypesActionsModalCard = {
	type: TypesReducerModalCard,
	payload?: TypeCartItemExtended | number,
}