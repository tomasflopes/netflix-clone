import styled, { css } from 'styled-components';
import { Play, Information, Replay } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-left: 4%;

  justify-content: center;
  background: var(--content);

  height: 70vh;
`;

export const InformationContainer = styled.div`
  display: flex;

  flex-direction: column;

  justify-content: space-around;
`;

export const Title = styled.h1`
  font-size: 52px;
  font-weight: bold;

  text-transform: capitalize;
`;

export const Description = styled.span`
  margin-top: 30px;
  font-size: 22px;

  width: 560px;
`;

export const Buttons = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const MainButtons = styled.div`
  display: flex;

  align-items: center;

  margin-top: 50px;
`;

export const PlayButton = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-around;
  padding: 10px 25px 10px 28px;

  border-radius: 6px;

  background: var(--white);

  margin-right: 8px;

  cursor: pointer;
  > span {
    color: var(--dark-text);
    font-weight: bold;
    font-size: 20px;
  }

  &:hover {
    filter: opacity(0.75);
  }
`;

const iconCSS = css`
  width: 32px;
  height: 32px;

  flex-shrink: 0;
`;

export const PlayIcon = styled(Play)`
  ${iconCSS}

  > path {
    color: var(--dark-text);
  }
`;

export const InformationButton = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-evenly;
  padding: 10px 25px 10px 22px;

  cursor: pointer;

  border-radius: 6px;

  background: var(--light-button);

  > span {
    margin-left: 8px;
    color: var(--white);
    font-weight: bold;
    font-size: 20px;
  }

  &:hover {
    background: var(--light-button-hover);
  }
`;

export const InfoIcon = styled(Information)`
  ${iconCSS}
`;

export const OtherButtons = styled.div`
  display: flex;

  height: 40px;
  width: 160px;

  align-items: center;
`;

export const ReplayContainer = styled.div`
  display: flex;

  margin-right: 10px;

  border: 3px solid var(--light-border);

  border-radius: 50%;

  padding: 8px;
`;

export const ReplayIcon = styled(Replay)`
  width: 24px;
  height: 24px;

  flex-shrink: 0;
`;

export const AgeContainer = styled.div`
  display: flex;

  background: var(--light-container);

  align-items: center;
  height: 100%;
  width: 100%;
  border-left: 4px solid var(--white);

  > span {
    margin-left: 12px;
    font-size: 20px;
  }
`;
