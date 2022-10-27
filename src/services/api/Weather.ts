import { api, API_KEY, IBaseResponse } from '.';

export interface ICidadeDados {
  components: {
    co: number;
    nh3: number;
    no: number;
    no2: number;
    o3: number;
    pm2_5: number;
    pm10: number;
    so2: number;
  };
  dt: number;
  main: {
    aqi: number;
  };
}

export interface ICidade {
  nome: string;
  lat: string;
  lng: string;
}

export const WeatherService = {
  ListaInfosCidade: async (cidade: ICidade) => {
    return api.get<IBaseResponse<ICidadeDados[]>>(
      `forecast?lat=${cidade.lat}&lon=${cidade.lng}&appid=${API_KEY}`,
    );
  },

  ListaCidades: (): ICidade[] => {
    return [
      {
        nome: 'Santos',
        lat: '-23.9549779',
        lng: '-46.4147151',
      },
      {
        nome: 'Guarujá',
        lat: '-23.9438831',
        lng: '-46.2985608',
      },
      {
        nome: 'Praia Grande',
        lat: '-24.0368825',
        lng: '-46.6421176',
      },
      {
        nome: 'São Vicente',
        lat: '-23.9541666',
        lng: '-46.5010775',
      },
      {
        nome: 'Peruíbe',
        lat: '-24.3296877',
        lng: '-47.1558979',
      },
    ];
  },
};
