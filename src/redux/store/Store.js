/**
 * Created by jibin on 17/8/24.
 */
import {createStore, combineReducers, applyMiddleware} from 'redux';
import * as reducer from '../reducer/index';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

let store = createStore(combineReducers(reducer), applyMiddleware(thunk, logger));

export default store;