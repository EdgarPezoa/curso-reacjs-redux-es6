import React from 'react';
import PropTypes from 'prop-types';

//Components
import WeatherData from '../WeatherLocation/WeatherData';

const ForecastItem = (props) => {
    const {weekDay, hour, data} = props;
    return(
        <div>
            <div>
                <h3>{`${weekDay} - ${hour}hrs.`}</h3>
            </div>
            <WeatherData data={ data } />
        </div>
    )
};

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weatherState: PropTypes.string.isRequired,
        humidity: PropTypes.number.isRequired,
        wind: PropTypes.string.isRequired
    })
};

export default ForecastItem;