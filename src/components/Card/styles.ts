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
    transform: scale(1.4);

    > div {
      transform: translateY(0%);
      transform: scale(1);

      display: flex;
    }

    > h1 {
      transform: translateY(-40px);
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

  align-items: stretch;
`;

export const Buttons = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;

  padding: 10px 5px 5px 8px;
`;

export const Button = styled.div`
  display: flex;

  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  flex-shrink: 0;
  border: 2px solid var(--lighter-border);

  padding: 5px;

  border-radius: 50%;

  margin-right: 3px;

  &:nth-child(5) {
    position: absolute;
    right: 0;
  }

  transition: background 0.2s ease-out;
  transition: border 0.3s ease-in;

  &:hover {
    background: var(--white);
    border: 2px solid var(--white);

    > svg {
      fill: var(--primary);
    }
  }
`;

const iconCSS = css`
  width: 20px;
  height: 20px;

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
  width: 15px;
  height: 15px;
`;

export const DislikeIcon = styled(Dislike)`
  ${iconCSS}
  width: 15px;
  height: 15px;
`;

export const MoreArrow = styled(CaretDown)`
  ${iconCSS}
`;

export const CardInfo = styled.div`
  display: flex;

  align-items: center;

  margin-left: 10px;
  margin-bottom: 5px;
`;

export const Relevance = styled.span`
  font-size: 12px;

  color: var(--highlighted-text);
  font-weight: bold;

  margin-right: 5px;
`;

export const Age = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  padding: 1px 2px;

  border: 1px solid var(--lighter-border);

  margin-right: 5px;
`;

export const Seasons = styled.span`
  font-size: 12px;
`;

export const CardCategory = styled.div`
  display: flex;

  align-items: center;
  justify-content: flex-start;
  margin-left: 10px;

  > span {
    font-size: 12px;
  }

  > span + div {
    margin: 0 5px;
  }
`;

export const Dot = styled.div`
  width: 3px;
  height: 3px;

  background: var(--dot);
`;
