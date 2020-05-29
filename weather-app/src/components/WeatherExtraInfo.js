import React from 'react';

const WeatherExtraInfo = (props) => {
    const { himidity, wind } = props;
    return(
        <div>
            <span>{ `${himidity}% - ` }</span>
            <span>{ `${wind} Viento` }</span>
        </div>
    )
};

export default WeatherExtraInfo;