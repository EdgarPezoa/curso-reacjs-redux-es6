import { 
    CLOUD,
    SUN,
    RAIN,
    SNOW,
    THUNDER,
    DRIZZLE
 } from '../const/Weather';

const getWeatherState = (weather) => {
    const { id } = weather;
    if(id < 300){
        return THUNDER;
    }else if(id < 400){
        return DRIZZLE;
    }else if(id < 600){
        return RAIN;
    }else if(id < 700){
        return SNOW;
    }else if(id === 800){
        return SUN;
    }else{
        return CLOUD;
    }
}

export const transformWeatherData = (data) => {
    const { humidity, temp } = data.main;
    const { speed } = data.wind;
    const weatherState = getWeatherState(data.weather[0]);

    const newData = {
        humidity,
        temperature: temp,
        weatherState,
        wind: `${speed} m/s`
    }
    return newData;
}