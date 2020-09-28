import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  flex-direction: column;

  & + div {
    margin-top: 20px;
  }
`;

export const Cards = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;
`;

export const Title = styled.h1`
  margin: 20px 0;

  font-size: 23px;
`;
