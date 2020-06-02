import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

//Components
import ForecastItem from './ForecastItem';

//Services
import getUrlForecastByCity from '../services/getUrlForecastByCity';

//Utils
import transformForecastData from '../utils/ForecastUtils';

const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
    'Domingo'
];

const data = {
    temperature:10,
    humidity:10,
    weatherState:'normal',
    wind:'normal'
};

const ForeCastExtended = (props) => {
    const { city } = props;
    const [ forecastData, setForecastData ] = useState(null);

    useEffect(()=>{
        setForecastData(null);
        getForecast();
    },[city]);

    const getForecast = () => {
        const apiUrl = getUrlForecastByCity(city);
        fetch(apiUrl,
        {
            headers: {
                "Accept": "application/json"
            }
        })
        .then(res => res.json())
        .then(forecast =>{
            const transformedForecast = transformForecastData(forecast);

            setForecastData(transformedForecast);
        });
    };

    const renderWeekDay = (forecastData) => {
        return forecastData.map( forecast => 
            <ForecastItem key={ `${forecast.weekDay}${forecast.hour}` } 
                weekDay={ forecast.weekDay } 
                hour={ forecast.hour } 
                data={ forecast.data } 
            /> 
        );
    };
    
    const renderProgress = () => {
        return "Cargando...";
    };

    return (
        <div className="forecastExtendedContainer">
            <h3>ForecastExtendido: {city}</h3>
            { 
                forecastData ?
                renderWeekDay(forecastData)  :
                renderProgress()
            }
        </div>
    );
}

ForeCastExtended.propTypes = {
    city: PropTypes.string.isRequired
}

export default ForeCastExtended;