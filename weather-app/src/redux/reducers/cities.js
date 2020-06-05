import { createSelector } from 'reselect';
import _ from 'lodash';
import { SET_FORECAST_DATA, GET_WEAHTER_CITY, SET_WEAHTER_CITY } from '../actions';

const defaultState = {
    
}

export const cities = ( state = defaultState, { type, payload } ) => {
    switch (type) {
        case SET_FORECAST_DATA: {
            const { city, forecastData } = payload;
            return { ...state, [city]:{ forecastData, weather: null }}
        }

        case GET_WEAHTER_CITY:{
            const city = payload;
            return { ...state, [city]:{ weather: null } };
        }

        case SET_WEAHTER_CITY:{
            const { city, weather } = payload;
            return {...state, [city]:{ weather }}
        }

        default:{
            return state;
        }
    }
};

export const getForecastDataFromCities = createSelector((state, city) => state[city] && state[city].forecastData, forecastData => forecastData );
const fromObjectToArray = (cities) => (_.toPairs(cities).map( ([key,value]) =>({key, name: key, data: value.weather})));
export const getWeatherCities = createSelector(state => fromObjectToArray(state), cities => cities);