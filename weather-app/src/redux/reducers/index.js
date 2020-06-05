import { combineReducers } from 'redux';
import { createSelector } from 'reselect';
import { city } from './city';
import { cities, getForecastDataFromCities as __getForecastDataFromCities } from './cities';

export default combineReducers({
    city,
    cities
});

export const getCity = createSelector(state => state.city, city => city);
export const getCities = createSelector(state => state.cities, cities => cities );

export const getForecastDataFromCities = createSelector(getCities, getCity, __getForecastDataFromCities);