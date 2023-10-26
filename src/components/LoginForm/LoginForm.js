import React from 'react';
import { useDispatch } from 'react-redux';
import { authActions, setAuthTimer } from '../../store/auth';
import { useNavigate } from 'react-router-dom';
import {
  BoldLink,
  BoxContainer,
  FormContainer,
  Input,
  MutedLink,
  SubmitButton,
} from '../Common/Common';
import './LoginForm.css';

const LoginForm = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    email: '',
    password: '',
    errorMsg: '',
  });
  const [loading, setLoading] = React.useState(false);

  const submitLogin = async () => {
    // validation
    // check all fields
    if (!state.email || !state.password) {
      setState({
        ...state,
        errorMsg: 'Please fill in all fields',
      });
      return;
    }

    setLoading(true);
    // all good
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: state.email, password: state.password }),
    };

    try {
      // get response
      let response = await fetch('/api/user/login', requestOptions);
      response = await response.json();

      if (response.message !== 'Login Successful!') {
        setState({
          ...state,
          errorMsg: response.message,
        });
        setLoading(false);
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

  const onChangeEmail = (e) => {
    setState({ ...state, email: e.target.value, errorMsg: '' });
  };

  const onChangePassword = (e) => {
    setState({ ...state, password: e.target.value, errorMsg: '' });
  };

  return (
    <BoxContainer>
      <FormContainer>
        <Input
          placeholder="Email"
          type="email"
          onChange={onChangeEmail}
          autoComplete="email"
        />
        <Input
          placeholder="Password"
          type="password"
          onChange={onChangePassword}
          autoComplete="current-password"
        />
      </FormContainer>
      <div style={{ marginBottom: '1rem' }} />
      {state.errorMsg.length > 0 && (
        <>
          <p className="errorTxt">{state.errorMsg}</p>
          <div style={{ marginBottom: '1rem' }} />
        </>
      )}
      {!loading && (
        <SubmitButton type="submit" onClick={submitLogin}>
          Login
        </SubmitButton>
      )}
      {loading && (
        <SubmitButton type="button" onClick={submitLogin}>
          Loading...
        </SubmitButton>
      )}
      <div style={{ marginBottom: '1rem' }} />
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
