import styled from 'styled-components/native';

import { COLORS } from '@styles/colors';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 12px;
  background-color: ${COLORS.primary};
`;

export const ContainerTitulo = styled.View`
  flex-direction: row;
  align-items: center;
`;
