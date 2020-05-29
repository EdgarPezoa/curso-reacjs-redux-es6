import React from 'react';
import PropTypes from  'prop-types';
import WeatherIcons from 'react-weathericons';
import { SUN } from '../../../const/Weather';

const icons = {
    [SUN]: 'day',
    sunny:"day-sunny",
    fog:'day-fog'
}

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    if(icon){
        return(
            <WeatherIcons name={ icon } size="2x" />
        )
    }
};

const WeatherTemperature = (props) => {
    const { temperature, weatherState} = props
    return(
        <div>
            { getWeatherIcon(weatherState) }
            <span>{ `${temperature}C°` }</span>
        </div>
    )
};

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired
};

export default WeatherTemperature;