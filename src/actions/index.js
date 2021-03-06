import axios from 'axios';
import API_KEY from '../config/api_key';

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city, countryCode) {
    const url = `${ROOT_URL}&q=${city},${countryCode}`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}