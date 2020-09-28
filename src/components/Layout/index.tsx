import React from 'react';

import { Container } from './styles';

import TopBar from '../TopBar';
import Preview from '../Preview';
import Rows from '../Rows';

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Preview />
      <Rows />
    </Container>
  );
};

export default Layout;
