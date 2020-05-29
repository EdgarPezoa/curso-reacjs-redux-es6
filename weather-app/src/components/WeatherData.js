import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

const WeatherData = () => {
    return (
        <div>
            <WeatherTemperature temperature={ 20 } weatherState = {"sunny"} />
            <WeatherExtraInfo himidity={ 80 } wind={"10 m/s"} />
        </div>
    )
};

export default WeatherData;