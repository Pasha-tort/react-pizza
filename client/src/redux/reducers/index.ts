import {combineReducers} from 'redux'

//reducers
import { reducerCart } from './reducerCart';
import { reducerModalCard } from './reducerModalCard';

//types
import {TypeStateReducerPages} from './reducerPages';
import {TypeCartState} from '../types/typesCart';
import { TypeModaCardState } from '../types/typesModalCard';

export type R = {
	reducerPages: TypeStateReducerPages,
	reducerCart: TypeCartState,
	reducerModalCard: TypeModaCardState,
}

export const rootReducer = combineReducers({
	reducerCart,
	reducerModalCard,
});