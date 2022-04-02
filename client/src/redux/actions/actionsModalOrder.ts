import { TypesReducerModalOrder, TypeDataModalOrder } from '../types/typesModalOrder'

const definitionDataModalOrder = (res: TypeDataModalOrder) => {
	return {
		type: TypesReducerModalOrder.definitionDataModalOrder,
		payload: res,
	}
}

export {
	definitionDataModalOrder
}