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
        <Title>lorem ipsum</Title>
        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Necessitatibus odio a cum laborum minima quas eaque laudantium
          expedita recusandae cupiditate?
        </Description>
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
