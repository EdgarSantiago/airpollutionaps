import React from 'react';

import ArIcon from '@icons/ar.svg';

import Spacer from '@atoms/Spacer';
import CustomText from '@atoms/CustomText';
import { Container, ContainerTitulo } from './styles';

interface IHomeScreenProps {
  children?: React.ReactNode;
}

const HomeScreen: React.FC<IHomeScreenProps> = () => {
  return (
    <Container>
      <ContainerTitulo>
        <ArIcon width={36} height={45} />

        <Spacer right={4} />

        <CustomText size={26} color="secondary" bold>
          Qualidade do Ar
        </CustomText>

        {/* TODO: Dropdown com cidades */}
      </ContainerTitulo>
    </Container>
  );
};

export default HomeScreen;
