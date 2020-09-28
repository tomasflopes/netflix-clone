import React from 'react';

import { Container } from './styles';

import Row from '../Row';

const Rows: React.FC = () => {
  return (
    <Container>
      <Row />
      <Row />
      <Row />
    </Container>
  );
};

export default Rows;
