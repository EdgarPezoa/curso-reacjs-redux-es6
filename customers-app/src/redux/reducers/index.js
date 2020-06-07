import { combineReducers } from 'redux';
import { customers } from './customers';
import { reducer as form } from 'redux-form';

export default combineReducers({
    customers,
    form
});