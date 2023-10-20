import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from '../Common/Common';
import { Marginer } from '../Marginer/Marginer';

const LoginForm = (props) => {
  const navigate = useNavigate();

  const submitLogin = () => {
    navigate('/members');
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Email" type="email" />
        <Input placeholder="Password" type="password" />
      </FormContainer>
      <Marginer direction="vertical" margin={10} />
      <MutedLink>
        <Link to="#">Forgot your password?</Link>
      </MutedLink>
      <Marginer direction="vertical" margin="1.6rem" />
      <SubmitButton type="submit" onClick={submitLogin}>
        Login
      </SubmitButton>
      <Marginer direction="vertical" margin="1rem" />
      <MutedLink>
        No Account?{' '}
        <BoldLink onClick={props.toggle} style={{ cursor: 'pointer' }}>
          Register
        </BoldLink>
      </MutedLink>
    </BoxContainer>
  );
};

export default LoginForm;
