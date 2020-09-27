import styled, { css } from 'styled-components';
import { Play, Information, Replay } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 70vh;
`;

export const InformationContainer = styled.div``;

export const Title = styled.div``;

export const Description = styled.div``;

export const Buttons = styled.div`
  display: flex;

  align-items: center;
  justify-content: space-between;
`;

export const MainButtons = styled.div`
  display: flex;
`;

export const PlayButton = styled.div``;

const iconCSS = css`
  width: 24px;
  height: 24px;

  flex-shrink: 0;
`;

export const PlayIcon = styled(Play)`
  ${iconCSS}
`;

export const InformationButton = styled.div``;

export const InfoIcon = styled(Information)`
  ${iconCSS}
`;

export const OtherButtons = styled.div``;

export const ReplayContainer = styled.div``;

export const ReplayIcon = styled(Replay)`
  ${iconCSS}
`;

export const AgeContainer = styled.div``;
