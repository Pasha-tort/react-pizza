export enum TypesReducerMessage {
	addMessage = 'ADD_MESSAGE',
	removeMessage = 'REMOVE_MESSAGE',
}

export type TypeMessage = {
	id: string,
	text: string,
}

export type TypeStateMessage = {
	messageList: TypeMessage[],
}

//actions

export type TypesActionsMessage = {
	type: TypesReducerMessage,
	payload: TypeMessage | string,
}