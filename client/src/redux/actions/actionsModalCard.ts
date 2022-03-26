import { TypesReducerModalCard, TypeModalCardItem, TypeIncludeProducts } from '../types/typesModalCard'

const openModalCard = () => {
	return {
		type: TypesReducerModalCard.openModalCard,
	}
}

const closeModalCard = () => {
	return {
		type: TypesReducerModalCard.closeModalCard,
	}
}

const defineDataModalCard = (res: TypeModalCardItem | {}) => {
	return {
		type: TypesReducerModalCard.defineDataModalCard,
		payload: res,
	}
}

const defineIncludeProductsModalCard = (res: TypeIncludeProducts) => {
	return {
		type: TypesReducerModalCard.defineIncludeProductsModalCard,
		payload: res,
	}
}

const setPriceModalCard = (res: number) => {
	return {
		type: TypesReducerModalCard.setPriceModalCard,
		payload: res,
	}
}

export {
	openModalCard,
	closeModalCard,
	defineDataModalCard,
	defineIncludeProductsModalCard,
	setPriceModalCard,
}