/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react-hooks/exhaustive-deps */
import { ActivityIndicator, FlatList } from 'react-native';
import React, { useEffect, useMemo, useState } from 'react';

import { ICidadeDados, WeatherService } from '@services/api/Weather';

import ArIcon from '@icons/ar.svg';

import { formatApiDate } from '@utils/date';
import { COLORS } from '@styles/colors';

import Accordion from '@molecules/Accordion';
import Spacer from '@atoms/Spacer';
import Dropdown from '@atoms/Dropdown';
import CustomText from '@atoms/CustomText';
import { Container, ContainerDado, ContainerTitulo } from './styles';

interface IHomeScreenProps {
  children?: React.ReactNode;
}

const HomeScreen: React.FC<IHomeScreenProps> = () => {
  const [cidadeSelecionada, setCidadeSelecionada] = useState<string>('Santos');
  const [dadosCidade, setDadosCidade] = useState<ICidadeDados[] | undefined>();
  const cidades = useMemo(WeatherService.ListaCidades, []);

  useEffect(() => {
    setDadosCidade(undefined);

    WeatherService.ListaInfosCidade(
      cidades.find(c => c.nome === cidadeSelecionada)!,
    ).then(({ data }) => setDadosCidade(data.list));
  }, [cidadeSelecionada]);

  const renderItem = ({ item }: { item: ICidadeDados }) => {
    let aqi;
    let aqiColor;

    switch (item.main.aqi) {
      case 1:
        aqi = 'Boa';
        aqiColor = COLORS.success;
        break;
      case 2:
        aqi = 'Razoável';
        aqiColor = COLORS.success;
        break;
      case 3:
        aqi = 'Moderada';
        aqiColor = COLORS.warning;
        break;
      case 4:
        aqi = 'Ruim';
        aqiColor = COLORS.danger;
        break;
      case 5:
        aqi = 'Muito Ruim';
        aqiColor = COLORS.danger;
        break;
      default:
        aqi = 'Não Identificada';
        aqiColor = COLORS.grayLight;
        break;
    }

    return (
      <Accordion
        content={
          <>
            <CustomText size={18} color="#ffffff" bold>
              {formatApiDate(item.dt)}
            </CustomText>

            <CustomText size={18} color="#ffffff">
              Qualidade do ar:{' '}
              <CustomText size={18} color={aqiColor} bold>
                {aqi}
              </CustomText>
            </CustomText>
          </>
        }
        contentHidden={
          <ContainerDado>
            <CustomText size={18} color="#ffffff">
              CO
            </CustomText>

            <CustomText size={18} color="#ffffff">
              {item.components.co}μg/m3
            </CustomText>
          </ContainerDado>
        }
        arrowColor={aqiColor}
      />
    );
  };

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

      <Spacer top={16} />

      {dadosCidade ? (
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
          data={dadosCidade}
          renderItem={renderItem}
        />
      ) : (
        <ActivityIndicator size="large" color={COLORS.secondary} />
      )}
    </Container>
  );
};

export default HomeScreen;
