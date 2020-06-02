import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

//Components
import WeatherLocation from './WeatherLocation';

const LocationList = (props) => {
    const { cities, onSelectedLocation } = props;

    const handleWeatherLocationClick = city =>{
        onSelectedLocation(city);
    };

    const renderWeatherLocation = cities => {
        return cities.map( (city) => 
            <WeatherLocation 
                key={city} 
                city={city} 
                handleWeatherLocationClick={ () => handleWeatherLocationClick(city) }
            /> 
        );
    };

    return(
        <div className="locationListContainer">
            { renderWeatherLocation(cities) }
        </div>
    )
}

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func.isRequired
}

export default LocationList;