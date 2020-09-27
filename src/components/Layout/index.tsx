import React from 'react';

import { Container } from './styles';

import TopBar from '../TopBar';
import Preview from '../Preview';

const Layout: React.FC = () => {
  return (
    <Container>
      <TopBar />
      <Preview />
      {/* <Films /> */}
    </Container>
  );
};

export default Layout;
