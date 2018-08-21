import { combineReducers } from 'redux';
import portfolio from './portfolio';
import user from './user';

export default combineReducers({ portfolio, user });
