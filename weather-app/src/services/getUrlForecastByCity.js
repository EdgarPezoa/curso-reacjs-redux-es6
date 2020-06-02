import { BASE_URL, API_KEY } from '../utils/api';

const getUrlForecastByCity = city =>{
    return `${BASE_URL}forecast/?q=${city}&appid=${API_KEY}`;
}

export default getUrlForecastByCity;