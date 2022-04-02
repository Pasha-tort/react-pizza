import {TypesReducerMessage, TypeMessage} from '../types/typesMessage';

const addMessage = (res: TypeMessage) => {
	return {
		type: TypesReducerMessage.addMessage,
		payload: res,
	}
}

const removeMessage = (res: string) => {
	return {
		type: TypesReducerMessage.removeMessage,
		payload: res,
	}
}

export {
	addMessage,
	removeMessage,
}