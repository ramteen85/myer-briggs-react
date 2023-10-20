import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ababab;
`;

const BoxContainer = styled.div`
  min-width: 500px;
  max-width: 600px;
  width: 60%;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;

  @media (max-width: 600px) {
    min-width: 400px;
  }

  @media (max-width: 400px) {
    min-width: 280px;
  }
`;

const IntroHeaderContainer = styled.div`
  padding: 1rem;
  color: white;
  background: rgb(52, 20, 175);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const IntroHeader = styled.p`
  font-size: 2rem;
  font-weight: 700;
  width: 100%;
  text-align: center;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const TextContainer = styled.div`
  padding: 1rem;
  color: rgb(52, 20, 175);
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const TextParagraph = styled.p`
  font-size: 1rem;
  font-weight: 300;

  &:not(:last-of-type) {
    margin-bottom: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
  }
`;

const ButtonContainer = styled.div`
  padding: 1rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: fit-content;
  padding: 0.5rem;
  min-width: 10rem;
  margin-right: 1rem;
  cursor: pointer;
  background: rgb(52, 20, 175);
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;

  &:hover {
    background: green;
  }

  @media (max-width: 950px) {
    font-size: 0.8rem;
    padding: 0.2rem;
    min-width: 6rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
    margin-right: 0;
    margin-bottom: 0.3rem;
  }
`;

const Members = () => {
  const navigate = useNavigate();

  const logout = () => {
    // logout
    navigate('/');
  };

  const toTest = () => {
    // to test page
    navigate('/test');
  };

  return (
    <AppContainer>
      <BoxContainer>
        <IntroHeaderContainer>
          <IntroHeader>Welcome to</IntroHeader>
          <IntroHeader>The Myer Briggs Personality Test</IntroHeader>
        </IntroHeaderContainer>
        <TextContainer>
          <TextParagraph>Hi Ram!</TextParagraph>
          <TextParagraph>
            The Myer Briggs personality Test was designed to help people understand
            personality differences in the general population. While there are no “better”
            or “worse” personality preferences, the test can help people understand their
            strengths and blind spots as well as how they might differ from others.
          </TextParagraph>
          <TextParagraph>
            Feel free to take the test. Once you have determined your personality type you
            can then view your results or take the test again!
          </TextParagraph>
        </TextContainer>
        <ButtonContainer>
          {/* <Button>View Results</Button> */}
          <Button onClick={toTest}>Take Test</Button>
          <Button onClick={logout}>Logout</Button>
        </ButtonContainer>
      </BoxContainer>
    </AppContainer>
  );
};

export default Members;
