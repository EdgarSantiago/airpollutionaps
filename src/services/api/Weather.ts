import { api } from '.';

export const WeatherService = {
  Listagem: () => {
    return api.get<null>('/weather');
  },
};
