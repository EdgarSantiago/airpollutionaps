import { api } from '.';

export interface ICidade {
  nome: string;
  lat: string;
  lng: string;
}

export const WeatherService = {
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
