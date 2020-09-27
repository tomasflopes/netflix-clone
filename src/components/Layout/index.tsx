import React from 'react';

import { Container, Wrapper } from './styles';

import TopBar from '../TopBar';

const Layout: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <TopBar />
        {/* <Preview />
        <Films /> */}
      </Wrapper>
    </Container>
  );
};

export default Layout;
