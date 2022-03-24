import {combineReducers} from 'redux'

//reducers
import { reducerPages } from './reducerPages'

//types
import {TypeStateReducerPages} from './reducerPages';

export type R = {
	reducerPages: TypeStateReducerPages,
}

export const rootreducer = combineReducers({
	reducerPages,
});