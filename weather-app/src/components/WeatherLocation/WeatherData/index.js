import React from 'react';
import PropTypes from 'prop-types';
import Papper from '@material-ui/core/Paper';

import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.scss';

const WeatherData = (props) => {
    const { temperature, weatherState, humidity, wind } = props.data;
    return (
        <Papper elevation={3}>
            <div className="weatherDataCont">
                <WeatherTemperature temperature={ temperature } weatherState = { weatherState } />
                <WeatherExtraInfo humidity={ humidity } wind={ wind } />
            </div>
        </Papper>
    )
};

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default WeatherData; 