import React from 'react';

import {
  Container,
  NetflixLogo,
  SearchContainer,
  SearchMenu,
  DownCaret,
  SearchRow,
  SearchRowItem,
  ProfileContainer,
  SearchIcon,
  GiftIcon,
  NotificationIcon,
  AvatarContainer,
  ProfileAvatar,
} from './styles';

const TopBar: React.FC = () => {
  return (
    <Container>
      <SearchContainer>
        <NetflixLogo>Netflix</NetflixLogo>
        <SearchMenu>
          <span>Browse</span>
          <DownCaret />
        </SearchMenu>
        <SearchRow>
          <SearchRowItem className='active'>Home</SearchRowItem>
          <SearchRowItem>Series</SearchRowItem>
          <SearchRowItem>Movies</SearchRowItem>
          <SearchRowItem>Most Recent</SearchRowItem>
          <SearchRowItem>My List</SearchRowItem>
        </SearchRow>
      </SearchContainer>

      <ProfileContainer>
        <SearchIcon />
        <GiftIcon />
        <NotificationIcon />
        <AvatarContainer>
          <ProfileAvatar />
          <DownCaret />
        </AvatarContainer>
      </ProfileContainer>
    </Container>
  );
};

export default TopBar;
