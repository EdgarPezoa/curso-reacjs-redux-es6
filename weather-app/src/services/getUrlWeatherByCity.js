import { BASE_URL, API_KEY } from '../utils/api';


export const getUrlWeatherByCity = city =>{
    return `${BASE_URL}weather/?q=${city}&appid=${API_KEY}`;
}