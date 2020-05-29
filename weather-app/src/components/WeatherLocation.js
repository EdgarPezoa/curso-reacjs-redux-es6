import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';


const WeatherLocation = () => {
    return(
        <div>
            <h1>Weather Location</h1>
            <Location city={"Santiago"} ></Location>
            <WeatherData></WeatherData>
        </div>
    )
}

export default WeatherLocation;