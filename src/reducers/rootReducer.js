import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import {repoReducer} from "./repoReducer"

const rootReducer = combineReducers({
	userReducer,
	repoReducer,
});

export default rootReducer;
