import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = (props) => {
    const { humidity, wind } = props;
    return(
        <div>
            <span>{ `${humidity}% - ` }</span>
            <span>{ `${wind} Viento` }</span>
        </div>
    )
};

WeatherExtraInfo.propTypes = {
    humidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;