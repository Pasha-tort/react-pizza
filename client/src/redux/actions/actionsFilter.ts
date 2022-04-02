import { CardType } from '../types/typesCart';
import {TypesReducerFilter} from '../types/typesFilter';

const setFilterData = (res: string[] | []) => {
	return {
		type: TypesReducerFilter.setFilterData,
		payload: res,
	}
}

const setActiveFilter = (res: string[] | []) => {
	return {
		type: TypesReducerFilter.setActiveFilter,
		payload: res,
	}
}

const setTypeFilter = (res: CardType) => {
	return {
		type: TypesReducerFilter.setTypeFilter,
		payload: res,
	}
}

export {
	setFilterData,
	setActiveFilter,
	setTypeFilter,
}