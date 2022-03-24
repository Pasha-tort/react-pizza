//types
import { ActionReducerPages, TypesPagesList } from '../reducers/reducerPages'

const setActivePage = (res: TypesPagesList) => {
	return {
		type: ActionReducerPages.setActivePage,
		payload: res,
	}
}

export type TypesActionsPages = {
	type: ActionReducerPages,
	payload?: TypesPagesList
}

export {
	setActivePage
}