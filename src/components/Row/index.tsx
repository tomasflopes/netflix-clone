import React from 'react';

import { Container } from './styles';

import Card from '../Card';

const Row: React.FC = () => {
  return (
    <Container>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Container>
  );
};

export default Row;
