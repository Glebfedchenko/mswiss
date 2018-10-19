import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise';
import {composeWithDevTools} from 'redux-devtools-extension';
import index from './reducers/index';

const enhancer = applyMiddleware(thunk, promiseMiddleware);
export const store = createStore(index, composeWithDevTools(enhancer));
