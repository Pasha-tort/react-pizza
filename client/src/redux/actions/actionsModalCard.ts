import { TypesReducerModalCard, TypeCartItemExtended} from '../types/typesModalCard'

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

const defineDataModalCard = (res: TypeCartItemExtended | {}) => {
	return {
		type: TypesReducerModalCard.defineDataModalCard,
		payload: res,
	}
}

const setAdditionalPriceModalCard = (res: number) => {
	return {
		type: TypesReducerModalCard.setAdditionalPriceModalCard,
		payload: res,
	}
}

const setBasePriceModalCard = (res: number) => {
	return {
		type: TypesReducerModalCard.setBasePriceModalCard,
		payload: res,
	}
}



export {
	openModalCard,
	closeModalCard,
	defineDataModalCard,
	setAdditionalPriceModalCard,
	setBasePriceModalCard,
}