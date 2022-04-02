//reducer

export enum TypesModal {
	modalCart = 'modalCart',
	modalAddToCart = 'modalAddToCart',
	modalFilter = 'modalFilter',
	modalOrderSuccess = 'modalOrderSuccess',
}

export enum TypesReducerModal {
	// setTypeModal = 'SET_TYPE_MODAL',
	openModal = 'OPEN_MODAL',
	closeModal = 'CLOSE_MODAL',
}

export type TypeStateModal = {
	typeModal: TypesModal | null,
	openModal: boolean,
}

//action
export type TypesActionsModal = {
	type: TypesReducerModal,
	payload?: TypesModal | null,
}

export type TypePayload = TypesModal;