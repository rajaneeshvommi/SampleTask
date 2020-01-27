import { combineReducers } from 'redux';
import userReducer from '../src/generatePage/generateReducer';

const appReducers ={
    user: userReducer
}

const allReducers = combineReducers(appReducers);

export default allReducers