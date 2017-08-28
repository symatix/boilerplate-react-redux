import { combineReducers } from 'redux';
import initReducer from './init';
import activeReducer from './active';

const rootReducer = combineReducers({
	init: initReducer,
	active: activeReducer
})

export default rootReducer;