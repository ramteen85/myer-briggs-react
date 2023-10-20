import React from 'react';
import './Home.css';
import styled from 'styled-components';
import AccountBox from '../../components/AccountBox/AccountBox';

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #ababab;
`;

const Home = () => {
  return (
    <AppContainer>
      <AccountBox />
    </AppContainer>
  );
};

export default Home;
