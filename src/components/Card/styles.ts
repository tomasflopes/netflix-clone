import styled from 'styled-components';

export const Container = styled.div`
  display: flex;

  width: 260px;
  height: 140px;

  align-items: center;
  justify-content: center;

  background: var(--content);

  margin-right: 10px;

  border-radius: 2px;

  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.3);
  }
`;

export const Title = styled.h1`
  font-size: 22px;

  font-weight: bold;
`;
