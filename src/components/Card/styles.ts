import styled, { css } from 'styled-components';

import { Play, Like, Dislike, Check, CaretDown } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;

  position: relative;

  overflow: hidden;

  flex-direction: column;
  width: 260px;
  height: 140px;

  align-items: center;
  justify-content: center;

  background: var(--content);

  margin-right: 10px;

  transition: transform 0.2s ease-in-out;
  border-radius: 2px;

  &:hover {
    z-index: 2;
    transform: scale(1.5);

    > div {
      transform: translateY(0%);

      display: flex;
    }

    > h1 {
      transform: translateY(-30px);
    }
  }
`;

export const Title = styled.h1`
  font-size: 30px;

  font-weight: bold;

  transition: transform 0.35s ease-in-out;
`;

export const HoverEffect = styled.div`
  position: absolute;
  z-index: 3;

  bottom: 0;
  left: 0;
  right: 0;

  transform: translateY(100%);

  transition: transform 0.4s ease-in-out;

  background: var(--secondary);
  width: 100%;
  height: 90px;

  display: flex;
  flex-direction: column;
`;

export const Buttons = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;
`;

export const Button = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;

  width: 40px;
  height: 40px;

  flex-shrink: 0;
  border: 2px solid var(--light-border);

  padding: 5px;

  border-radius: 50%;
`;

const iconCSS = css`
  width: 30px;
  height: 30px;

  flex-shrink: 0;
`;

export const PlayIcon = styled(Play)`
  ${iconCSS}
`;

export const AddToListIcon = styled(Check)`
  ${iconCSS}
`;

export const LikeIcon = styled(Like)`
  ${iconCSS}
`;

export const DislikeIcon = styled(Dislike)`
  ${iconCSS}
`;

export const MoreArrow = styled.div``;

export const CardInfo = styled.div``;

export const Relevance = styled.div``;

export const Age = styled.div``;

export const Seasons = styled.div``;

export const CardCategory = styled.div``;

export const Dot = styled.div``;
