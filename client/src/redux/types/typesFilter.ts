import { CardType } from './typesCart'

export enum TypesReducerFilter {
	setFilterData = 'SET_FILTER_DATA',
	setActiveFilter = 'SET_ACTIVE_FILTER',
	setTypeFilter = 'SET_TYPE_FILTER',
}

export type TypeStateFilter = {
	typeFilter: CardType | null,
	filterData: string[],
	activeFilter: string[],
}

export type TypesActionsModalFilter = {
	type: TypesReducerFilter,
	payload: string[] | CardType | null,
}

