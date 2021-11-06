import { combineReducers } from 'redux';
import { userReducer } from './userReducer';
import { repoReducer } from './repoReducer';
import { starReducer } from './starReducer';

const rootReducer = combineReducers({
	userReducer,
	repoReducer,
	starReducer,
});

export default rootReducer;
