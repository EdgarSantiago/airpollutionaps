/* eslint-disable react-hooks/exhaustive-deps */
import React, { useMemo, useState } from 'react';

import { WeatherService } from '@services/api/Weather';

import ArIcon from '@icons/ar.svg';

import Spacer from '@atoms/Spacer';
import Dropdown from '@atoms/Dropdown';
import CustomText from '@atoms/CustomText';
import { Container, ContainerTitulo } from './styles';

interface IHomeScreenProps {
  children?: React.ReactNode;
}

// TODO: FlatList com accordions
// TODO: Loader enquanto carrega API
const HomeScreen: React.FC<IHomeScreenProps> = () => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>('Santos');
  const cidades = useMemo(WeatherService.ListaCidades, []);

  return (
    <Container>
      <ContainerTitulo>
        <ArIcon width={36} height={45} />

        <Spacer right={4} />

        <CustomText size={26} color="secondary" bold>
          Qualidade do Ar
        </CustomText>
      </ContainerTitulo>

      <Spacer top={16} />

      <Dropdown
        placeholder="Busca por região"
        items={cidades.map(cidade => ({
          label: cidade.nome,
          value: cidade.nome,
        }))}
        value={cidadeSelecionada}
        setValue={setCidadeSelecionada}
      />
    </Container>
  );
};

export default HomeScreen;
