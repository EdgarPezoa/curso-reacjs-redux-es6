import { createStore } from 'redux';
import { city } from '../reducers/city';

const defaultState = {};

export const store = createStore(city, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());