import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from '../Common/Common';
import { Marginer } from '../Marginer/Marginer';

const RegisterForm = (props) => {
  const navigate = useNavigate();

  const submitRegister = () => {
    navigate('/members');
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Full Name" type="text" />
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
        <Input placeholder="Confirm Password" type="password" />
      </FormContainer>
      <Marginer direction="vertical" margin="1.6rem" />
      <SubmitButton type="submit" onClick={submitRegister}>
        Register
      </SubmitButton>
      <Marginer direction="vertical" margin="1rem" />
      <MutedLink>
        Already have an account?{' '}
        <BoldLink onClick={props.toggle} style={{ cursor: 'pointer' }}>
          Login
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default RegisterForm;
