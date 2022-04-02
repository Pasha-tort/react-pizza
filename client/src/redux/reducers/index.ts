import {combineReducers} from 'redux'

//reducers
import { reducerCart } from './reducerCart';
import { reducerModalCard } from './reducerModalCard';
import { reducerModalCart } from './reducreModalCart';
import { reducerModal } from './reducerModal';
import { reducerFilter } from './reducerFilter';
import {reducerModalOrder} from './reducerModalOrder';
import { reducerMessage } from './reducerMessage';

//types
import {TypeCartState} from '../types/typesCart';
import { TypeModaCardState } from '../types/typesModalCard';
import { TypeStateModalCart } from '../types/typesModalCart';
import { TypeStateModal } from '../types/typesModal';
import { TypeStateFilter } from '../types/typesFilter';
import { TypeStateModalOrder } from '../types/typesModalOrder';
import { TypeStateMessage } from '../types/typesMessage';

export type R = {
	reducerCart: TypeCartState,
	reducerModalCard: TypeModaCardState,
	reducerModalCart: TypeStateModalCart,
	reducerModal: TypeStateModal,
	reducerFilter: TypeStateFilter,
	reducerModalOrder: TypeStateModalOrder,
	reducerMessage: TypeStateMessage,
}

export const rootReducer = combineReducers({
	reducerCart,
	reducerModalCard,
	reducerModalCart,
	reducerModal,
	reducerFilter,
	reducerModalOrder,
	reducerMessage,
});