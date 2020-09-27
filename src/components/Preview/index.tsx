import React from 'react';

import {
  Container,
  InformationContainer,
  Title,
  Description,
  Buttons,
  MainButtons,
  PlayButton,
  PlayIcon,
  InformationButton,
  InfoIcon,
  OtherButtons,
  ReplayContainer,
  ReplayIcon,
  AgeContainer,
} from './styles';

const Preview: React.FC = () => {
  return (
    <Container>
      <InformationContainer>
        <Title>Cenas</Title>
        <Description>A stuffz is doing stufz in the housez</Description>
      </InformationContainer>

      <Buttons>
        <MainButtons>
          <PlayButton>
            <PlayIcon />
            <span>Play</span>
          </PlayButton>
          <InformationButton>
            <InfoIcon />
            <span>More Information</span>
          </InformationButton>
        </MainButtons>

        <OtherButtons>
          <ReplayContainer>
            <ReplayIcon />
          </ReplayContainer>

          <AgeContainer>
            <span>13+</span>
          </AgeContainer>
        </OtherButtons>
      </Buttons>
    </Container>
  );
};

export default Preview;
