import Moment from 'moment';
import 'moment/locale/es';
import { transformWeatherData }  from '../utils/WeatherUtils';

const transformForecastData = (data) => {
    return data.list.filter((item)=>{
        return(
            Moment.unix(item.dt).utc().hour() === 6 ||
            Moment.unix(item.dt).utc().hour() === 12 ||
            Moment.unix(item.dt).utc().hour() === 18 
        )
    }).map((item)=>{
        return(
            {
                weekDay: Moment.unix(item.dt).format('ddd'),
                hour: Moment.unix(item.dt).utc().hour(),
                data: transformWeatherData(item)
            }
        );
    });
};

export default transformForecastData;