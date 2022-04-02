import {TypesReducerModal, TypePayload} from '../types/typesModal';

const openModal = (res: TypePayload) => {
	return {
		type: TypesReducerModal.openModal,
		payload: res,
	}
}

const closeModal = () => {
	return {
		type: TypesReducerModal.closeModal,
	}
}

export {
	openModal,
	closeModal,
}