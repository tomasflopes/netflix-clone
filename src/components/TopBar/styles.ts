import styled, { css } from 'styled-components';

import { SearchOutline, Bell, CaretDown, Gift } from '../../styles/Icons';

export const Container = styled.div`
  display: flex;

  padding: 0 4%;

  height: 68px;

  width: 100%;

  align-items: center;
  justify-content: space-between;
`;

export const NetflixLogo = styled.h1`
  color: var(--netflix);

  text-transform: uppercase;
  font-size: 28px;

  letter-spacing: -1.5px;
  line-height: 50px;

  cursor: pointer;
`;

export const SearchContainer = styled.div`
  display: flex;

  align-items: center;
`;

export const SearchMenu = styled.div`
  margin-left: 20px;

  > span {
    font-weight: bold;
    font-size: 10px;
  }

  @media (min-width: 886px) {
    display: none;
  }
`;

export const DownCaret = styled(CaretDown)`
  width: 22px;
  height: 22px;

  cursor: pointer;
  flex-shrink: 0;
`;

export const SearchRow = styled.div`
  display: none;

  @media (min-width: 886px) {
    display: flex;

    align-items: center;
    justify-content: space-evenly;

    width: 420px;
  }
`;

export const SearchRowItem = styled.span`
  font-size: 13px;

  &.active {
    font-weight: bold;
  }
`;

export const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: min(20%, 220px);
`;

const iconCSS = css`
  width: 24px;
  height: 24px;

  flex-shrink: 0;
`;

export const SearchIcon = styled(SearchOutline)`
  ${iconCSS}
`;

export const GiftIcon = styled(Gift)`
  ${iconCSS}
`;

export const NotificationIcon = styled(Bell)`
  ${iconCSS}
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProfileAvatar = styled.div`
  width: 30px;
  height: 30px;

  background: var(--content);
  border-radius: 4px;
`;
