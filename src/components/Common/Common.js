import styled from 'styled-components';

export const BoxContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const FormContainer = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: 0px 0px 2.5px rgba(15, 15, 15, 0.19);
`;

export const MutedLink = styled.span`
  font-size: 12px;
  color: rgba(200, 200, 200, 0.8);
  font-weight: 500;
  text-decoration: none;

  a {
    font-size: 12px;
    color: rgba(200, 200, 200, 0.8);
    font-weight: 500;
    text-decoration: none;
  }
`;

export const BoldLink = styled.span`
  font-size: 12px;
  color: rgb(41, 15, 241);
  font-weight: 500;
  text-decoration: none;

  a {
    font-size: 12px;
    color: rgb(41, 15, 241);
    font-weight: 500;
    text-decoration: none;
  }
`;

export const Input = styled.input`
  outline: none;
  height: 42px;
  width: 100%;
  border: 1px solid rgba(200, 200, 200, 0.3);
  padding: 0px 10px;
  border-bottom: 1.4px solid transparent;
  transition: all 200ms ease-in-out;
  font-size: 0.8rem;

  &::placeholder {
    color: rgba(200, 200, 200, 1);
  }

  &:not(:last-of-type) {
    border-bottom: 1.5px solid rgba(200, 200, 200, 0.4);
  }

  &:focus {
    outline: none;
    border-bottom: 2px solid rgb(41, 15, 241);
  }
`;

export const SubmitButton = styled.button`
  width: 100% auto;
  padding: 11px 40%;
  color: #fff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  letter-spacing: 1px;
  border-radius: 100px 100px 100px 100px;
  cursor: pointer;
  transition: all, 240ms ease-in-out;
  background: rgb(52, 20, 175);
  background: linear-gradient(
    90deg,
    rgba(52, 20, 175, 1) 25%,
    rgba(58, 12, 236, 1) 50%,
    rgba(52, 20, 175, 1) 75%
  );

  &:hover {
    filter: brightness(1.03);
    background: green;
  }
`;
