import API_KEY from '../config/api_key';

const URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    }
}