import { TypeStateMessage, TypesReducerMessage, TypesActionsMessage, TypeMessage } from '../types/typesMessage';

const initialState = {
	messageList: [],
}

export const reducerMessage = (state: TypeStateMessage = initialState, action: TypesActionsMessage): TypeStateMessage => {
	switch(action.type) {
		case TypesReducerMessage.addMessage:
			return {
				...state,
				messageList: [
					...state.messageList,
					action.payload as TypeMessage,
				]
			}
		case TypesReducerMessage.removeMessage:
			const index = state.messageList.findIndex((item, i) => item.id === action.payload);
			const messageList = [...state.messageList.slice(0, index), ...state.messageList.slice(index+1)]
			return {
				...state,
				messageList,
				
			}
		default:
			return state;
	}
}