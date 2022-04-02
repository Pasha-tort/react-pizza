import { TypesReducerModalCart } from '../types/typesModalCart'

const openModalCart = () => {
	return {
		type: TypesReducerModalCart.openModalCart,
	}
}

const closeModalCart = () => {
	return {
		type: TypesReducerModalCart.closeModalCart,
	}
}

export {
	openModalCart,
	closeModalCart,
}