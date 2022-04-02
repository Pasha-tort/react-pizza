import { TypeStateModal, TypesReducerModal, TypesActionsModal } from '../types/typesModal';

const initialState = {
	typeModal: null,
	openModal: false,
}

export const reducerModal = (state: TypeStateModal = initialState, action: TypesActionsModal): TypeStateModal => {
	switch(action.type) {
		case TypesReducerModal.openModal:
			return {
				...state,
				openModal: true,
				typeModal: action.payload!,
			}
		case TypesReducerModal.closeModal:
			return {
				...state,
				openModal: false,
				typeModal: null,
			}
		default:
			return state;
	}
}