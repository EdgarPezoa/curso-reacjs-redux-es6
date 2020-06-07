import { handleActions } from 'redux-actions';
import { FETCH_CUSTOMERS, INSERT_CUSTOMER, UPDATE_CUSTOMER, DELETE_CUSTOMER } from '../../constants';

export const customers = handleActions({
    [FETCH_CUSTOMERS]: (state, action) => [ ...action.payload ],
    [INSERT_CUSTOMER]: (state, action) => [...state, action.payload],
    [UPDATE_CUSTOMER]: (state, action) => {
        const customerNuevo = action.payload;
        const customers = state;
        const { id } = customerNuevo;

        return customers.reduce((acumulado, customer) => {
            if(customer.id === id){
                return [...acumulado, customerNuevo];    
            }
            return [...acumulado, customer];
        },[]);
    },
    [DELETE_CUSTOMER]: (state, action) => state.filter( customer => customer.id !== action.payload )
}, []);