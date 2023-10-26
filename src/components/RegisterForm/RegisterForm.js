import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions, setAuthTimer } from '../../store/auth';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from '../Common/Common';
import './RegisterForm.css';

const RegisterForm = (props) => {
  const [state, setState] = React.useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    emailValid: true,
    passwordValid: true,
    errorMsg: '',
  });
  const [loading, setLoading] = React.useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const submitRegister = async () => {
    // validation
    if (state.password !== state.confirmPassword) {
      // passwords do not match
      setState({
        ...state,
        passwordValid: false,
        errorMsg: 'Passwords must match!',
      });
      return;
    }

    // email validation
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(state.email)) {
      // email not valid
      setState({
        ...state,
        emailValid: false,
        errorMsg: 'Please enter a valid email',
      });
      return;
    }

    // check all fields
    if (!state.name || !state.email || !state.password || !state.confirmPassword) {
      setState({
        ...state,
        errorMsg: 'Please fill in all fields',
      });
      return;
    }

    setLoading(true);

    // all good, preparing payload
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: state.name,
        email: state.email,
        password: state.password,
      }),
    };

    try {
      // get response
      let response = await fetch('/api/user/register', requestOptions);
      response = await response.json();

      if (response.message !== 'Registration Successful!') {
        setState({
          ...state,
          errorMsg: response.message,
        });
        return;
      }

      // registration successful

      // all good? get token, login and start auth timer
      const expirationTime = new Date(new Date().getTime() + response.expiresIn);
      dispatch(
        authActions.loginHandler({
          token: response.token,
          expiresIn: expirationTime.toISOString(),
          name: response.name,
          email: response.email,
          personality: response.personality,
        }),
      );
      dispatch(setAuthTimer());
      setLoading(false);

      // go to members page
      navigate('/members');
    } catch (error) {
      setLoading(false);
      setState({
        ...state,
        errorMsg: error.message,
      });
    }
  };

  const onNameChange = (e) => {
    setState({
      ...state,
      name: e.target.value,
    });
  };

  const onEmailChange = (e) => {
    setState({
      ...state,
      email: e.target.value,
      emailValid: true,
      errorMsg: '',
    });
  };

  const onPasswordChange = (e) => {
    setState({
      ...state,
      password: e.target.value,
      passwordValid: true,
      errorMsg: '',
    });
  };

  const onConfimPasswordChange = (e) => {
    setState({
      ...state,
      confirmPassword: e.target.value,
      passwordValid: true,
      errorMsg: '',
    });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input placeholder="Name" type="text" onChange={onNameChange} />
        <Input
          placeholder="Email"
          type="email"
          onChange={onEmailChange}
          className={!state.emailValid ? 'error' : ''}
          autoComplete={'email'}
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={onPasswordChange}
          className={!state.passwordValid ? 'error' : ''}
          autoComplete={'new-password'}
        />
        <Input
          placeholder="Confirm Password"
          type="password"
          onChange={onConfimPasswordChange}
          className={!state.passwordValid ? 'error' : ''}
          autoComplete={'new-password'}
        />
      </FormContainer>
      <div style={{ marginBottom: '1.6rem' }} />
      {state.errorMsg.length > 0 && (
        <>
          <p className="errorTxt">{state.errorMsg}</p>
          <div style={{ marginBottom: '1rem' }} />
        </>
      )}
      {!loading && (
        <SubmitButton type="submit" onClick={submitRegister}>
          Register
        </SubmitButton>
      )}
      {loading && <SubmitButton type="button">Loading...</SubmitButton>}
      <div style={{ marginBottom: '1rem' }} />
      <MutedLink>
        Already have an account?{' '}
        <BoldLink onClick={props.toggle} style={{ cursor: 'pointer' }}>
          Login
        </BoldLink>
      </MutedLink>
      <div style={{ marginBottom: '1rem' }} />
    </BoxContainer>
  );
};

export default RegisterForm;
