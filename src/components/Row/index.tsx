import React from 'react';

import { Container, Cards, Title } from './styles';

import Card from '../Card';

interface Props {
  title: string;
}

const Row: React.FC<Props> = ({ title }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Cards>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Cards>
    </Container>
  );
};

export default Row;
