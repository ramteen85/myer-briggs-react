import React from 'react';
import styled from 'styled-components';
import LoginForm from '../LoginForm/LoginForm';
import { motion } from 'framer-motion';
import RegisterForm from '../RegisterForm/RegisterForm';

const AccountBox = (props) => {
  const [isExpanded, setIsExpanded] = React.useState(false);
  const [active, setActive] = React.useState('login');

  const playExpandingAnimation = () => {
    setIsExpanded(true);
    setTimeout(() => {
      setIsExpanded(false);
    }, expandingTransition.duration * 1000 - 1500);
  };

  const backdropVariants = {
    expanded: {
      width: '233%',
      height: '1050px',
      borderRadius: '20%',
      transform: 'rotate(60deg)',
    },
    collapsed: {
      width: '160%',
      height: '550px',
      borderRadius: '50%',
      transform: 'rotate(60deg)',
    },
  };

  const expandingTransition = {
    type: 'spring',
    duration: 2.3,
    stiffness: 30,
  };

  const toggleActive = () => {
    playExpandingAnimation();
    setTimeout(() => {
      setActive(active === 'login' ? 'register' : 'login');
    }, 400);
  };

  return (
    <BoxContainer>
      <TopContainer>
        <BackDrop
          initial={false}
          animate={isExpanded ? 'expanded' : 'collapsed'}
          variants={backdropVariants}
          transition={expandingTransition}
        />
        {active === 'login' && (
          <HeaderContainer>
            <HeaderText>Myer-Briggs</HeaderText>
            <HeaderText>Personality </HeaderText>
            <HeaderText>Test</HeaderText>
            <SmallText>Login to continue!</SmallText>
          </HeaderContainer>
        )}
        {active === 'register' && (
          <HeaderContainer>
            <HeaderText>Myer-Briggs</HeaderText>
            <HeaderText>Personality</HeaderText>
            <HeaderText>Test</HeaderText>
            <SmallText>Register an Account!</SmallText>
          </HeaderContainer>
        )}
      </TopContainer>
      <InnerContainer>
        {active === 'login' && <LoginForm toggle={toggleActive} />}
        {active === 'register' && <RegisterForm toggle={toggleActive} />}
      </InnerContainer>
    </BoxContainer>
  );
};

const InnerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 1.8rem;
`;

const BoxContainer = styled.div`
  width: 280px;
  min-height: 550px;
  display: flex;
  flex-direction: column;
  border-radius: 19px;
  background-color: #fff;
  box-shadow: 0 0 2px rgba(15, 15, 15, 0.28);
  position: relative;
  overflow: hidden;
`;

const TopContainer = styled.div`
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 1.8em;
  padding-bottom: 5em;
`;

const BackDrop = styled(motion.div)`
  position: absolute;
  display: flex;
  flex-direction: column;
  border-radius: 50%;
  transform: rotate(60deg);
  top: -290px;
  left: -70px;
  width: 160%;
  height: 550px;
  background: rgb(52, 20, 175);
  background: linear-gradient(
    90deg,
    rgba(52, 20, 175, 1) 25%,
    rgba(58, 12, 236, 1) 50%,
    rgba(52, 20, 175, 1) 75%
  );
`;

const HeaderContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const HeaderText = styled.h2`
  font-size: 30px;
  font-weight: 600;
  line-height: 1.24;
  z-index: 10;
  color: #fff;
  letter-spacing: 1px;
  margin: 0;
`;

const SmallText = styled.h5`
  color: #fff;
  font-weight: 500;
  font-size: 11px;
  z-index: 10;
  margin: 0;
  text-align: right;
  top: 10px;
  position: relative;
  right: 15px;
`;

export default AccountBox;
