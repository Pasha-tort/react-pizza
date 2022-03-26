import {combineReducers} from 'redux'

//reducers
import { reducerPages } from './reducerPages'
import { reducerCart } from './reducerCart';

//types
import {TypeStateReducerPages} from './reducerPages';
import {TypeCartState} from '../types/typesCart';

export type R = {
	reducerPages: TypeStateReducerPages,
	reducerCart: TypeCartState,
}

export const rootReducer = combineReducers({
	reducerCart,
});