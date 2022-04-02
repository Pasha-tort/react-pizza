export enum TypesReducerModalOrder {
	definitionDataModalOrder = 'DEFENETION_DATA_MODAL_ORDER',
}

export type TypeDataModalOrder = any;

export type TypeStateModalOrder = {
	dataModalOrder: TypeDataModalOrder;
}

export type TypesActionsModalOrder = {
	type: TypesReducerModalOrder,
	payload: TypeDataModalOrder,
}