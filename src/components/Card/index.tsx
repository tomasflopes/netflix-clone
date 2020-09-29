import React from 'react';

import {
  Container,
  Title,
  HoverEffect,
  Buttons,
  Button,
  PlayIcon,
  AddToListIcon,
  LikeIcon,
  DislikeIcon,
  MoreArrow,
  CardInfo,
  Relevance,
  Age,
  Seasons,
  CardCategory,
  Dot,
} from './styles';

const Card: React.FC = () => {
  return (
    <Container>
      <Title>Title</Title>
      <HoverEffect>
        <Buttons>
          <Button>
            <PlayIcon />
          </Button>
          <Button>
            <AddToListIcon />
          </Button>
          <Button>
            <LikeIcon />
          </Button>
          <Button>
            <DislikeIcon />
          </Button>
          <Button>
            <MoreArrow />
          </Button>
        </Buttons>
        <CardInfo>
          <Relevance>97% relevant</Relevance>
          <Age>13+</Age>
          <Seasons>5 Seasons</Seasons>
        </CardInfo>
        <CardCategory>
          <span>Mystery</span>
          <Dot />
          <span>Thriller</span>
          <Dot />
          <span>Suspense</span>
        </CardCategory>
      </HoverEffect>
    </Container>
  );
};

export default Card;
