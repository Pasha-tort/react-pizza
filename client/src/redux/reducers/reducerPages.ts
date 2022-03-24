import { TypesActionsPages } from '../actions/actionsPages'

export enum ActionReducerPages {
	setActivePage = 'SET_ACTIVE_PAGE',
}

export enum TypesPagesList {
	home = 'home',
	pizza = 'pizza',
	rolls = 'rolls',
	snacks = 'snacks',
	desserts = 'desserts',
	drinks = 'drinks',
	saucess = 'saucess',
}

export type TypeStateReducerPages = {
	activePage: TypesPagesList,
}

const initialState = {
	activePage: TypesPagesList.home,
}

export type TypeReducerPages = (state: TypeStateReducerPages, action: TypesActionsPages) => TypeStateReducerPages;

export const reducerPages = (state: TypeStateReducerPages = initialState, action: TypesActionsPages): TypeStateReducerPages => {
	switch(action.type) {
		case ActionReducerPages.setActivePage:
			return {
				...state,
				activePage: action.payload!,
			}
		default:
			return state;
	}
}