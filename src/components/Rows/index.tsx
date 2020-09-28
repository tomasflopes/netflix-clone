import React from 'react';

import { Container } from './styles';

import Row from '../Row';

const Rows: React.FC = () => {
  return (
    <Container>
      <Row title='My list' />
      <Row title='Popular on Netflix' />
      <Row title='Trends' />
    </Container>
  );
};

export default Rows;
