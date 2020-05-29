import React from 'react';
import PropTypes from 'prop-types';

const WeatherExtraInfo = (props) => {
    const { himidity, wind } = props;
    return(
        <div>
            <span>{ `${himidity}% - ` }</span>
            <span>{ `${wind} Viento` }</span>
        </div>
    )
};

WeatherExtraInfo.propTypes = {
    himidity: PropTypes.number.isRequired,
    wind: PropTypes.string.isRequired,
};

export default WeatherExtraInfo;