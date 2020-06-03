import { SET_CITY } from '../actions';

export const city = (state = {}, {type, value}) => {
    switch (type) {
        case SET_CITY:{
            return { ...state, city: value }
        }
    
        default:{
            return state;
        }
    }
};