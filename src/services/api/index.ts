import axios from 'axios';

export const BASE_URL = 'https://api.openweathermap.org/data/2.5/air_pollution';
export const API_KEY = '0500bd148c00d1787fbe4b6a1107c98e';

export const api = axios.create({ baseURL: `${BASE_URL}` });

export interface IBaseResponse<T> {
  coord: {
    lat: number;
    lon: number;
  };
  list: T;
}
