import { TypeStateFilter, TypesReducerFilter, TypesActionsModalFilter } from '../types/typesFilter';
import { CardType } from '../types/typesCart';

const initialState = {
	typeFilter: null,
	filterData: [],
	activeFilter: [],
}

export const reducerFilter = (state: TypeStateFilter = initialState, action: TypesActionsModalFilter): TypeStateFilter => {
	switch(action.type) {
		case TypesReducerFilter.setFilterData:
			return {
				...state,
				filterData: action.payload as string[],
			}
		case TypesReducerFilter.setActiveFilter:
			return {
				...state,
				activeFilter: action.payload as string[],
			}
		case TypesReducerFilter.setTypeFilter:
			return {
				...state,
				typeFilter: action.payload as CardType | null,
			}
		default:
			return state;
	}
}