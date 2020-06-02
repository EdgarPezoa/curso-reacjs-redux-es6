import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@material-ui/core/CircularProgress';

//Components
import Location from './Location';
import WeatherData from './WeatherData';

//Utils
import { transformWeatherData } from '../../utils/WeatherUtils';

//Services
import { getUrlWeatherByCity } from '../../services/getUrlWeatherByCity';



const WeatherLocation = (props) => {
    const { city, handleWeatherLocationClick } = props;
    const [ data, setData ] = useState(null);

    useEffect(()=>{
        getWeather();
    }, []);

    const getWeather = () => {
        const apiUrl = getUrlWeatherByCity(city);
        fetch(apiUrl,
        {
            headers: {
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(weather =>{
            var dataTransformed = transformWeatherData(weather);
            setData(dataTransformed);
        });
    }

    return(
        <div className="weatherLocationContainer" onClick={ handleWeatherLocationClick }>
            <Location city = { city } ></Location>
            { 
                data ? 
                <WeatherData data = { data }></WeatherData> : 
                <CircularProgress size={40} thickness={4} />
            }
        </div>
    )
}

WeatherLocation.propTypes = {
    city: PropTypes.string.isRequired,
    handleWeatherLocationClick: PropTypes.func.isRequired
}

export default WeatherLocation;