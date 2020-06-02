import React from 'react';
import PropTypes from  'prop-types';
import WeatherIcons from 'react-weathericons';
import { 
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE 
} from '../../../const/Weather';

const icons = {
    [CLOUD]:'cloud',
    [SUN]: 'day-sunny',
    [RAIN]: 'rain',
    [SNOW]: 'snow',
    [THUNDER]: 'day-thunderstore',
    [DRIZZLE]: 'day-showers'

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