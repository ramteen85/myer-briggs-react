import React from 'react';
import { styled } from 'styled-components';

const ConfirmBox = ({ show, title, message, noFunc, yesFunc }) => {
  return (
    <>
      {show && <ModalOverlay />}
      {show && (
        <Dialog>
          <DialogTitleContainer>
            <h2>{title}</h2>
          </DialogTitleContainer>

          <DialogMessageContainer>
            <p>{message}</p>
          </DialogMessageContainer>
          <DialogButtonContainer>
            <DialogButton onClick={noFunc}>No</DialogButton>
            <DialogButton onClick={yesFunc}>Yes</DialogButton>
          </DialogButtonContainer>
        </Dialog>
      )}
    </>
  );
};

export default ConfirmBox;

const ModalOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  background: black;
  opacity: 0.9;
`;

const Dialog = styled.div`
  background: white;
  position: absolute;
  z-index: 3;
  display: flex;
  flex-direction: column;
  max-width: 500px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 5px;

  @media (max-width: 600px) {
    max-width: 300px;
  }

  @media (max-width: 400px) {
    max-width: 280px;
  }

  @media (max-width: 300px) {
    max-width: 250px;
  }
`;

const DialogTitleContainer = styled.div`
  background: rgb(41, 15, 241);
  width: 100%;
  padding: 1rem;
  border-radius: 5px;

  & > h2 {
    color: white;
    letter-spacing: 1px;
    font-size: 1.5rem;

    @media (max-width: 600px) {
      font-size: 1rem;
    }

    @media (max-width: 400px) {
      font-size: 0.8rem;
    }
  }
`;

const DialogMessageContainer = styled.div`
  padding: 1rem;

  & > p {
    @media (max-width: 600px) {
      font-size: 0.8rem;
    }

    @media (max-width: 400px) {
      font-size: 0.6rem;
    }
  }
`;

const DialogButtonContainer = styled.div`
  padding: 1rem;
  display: flex;
`;

const DialogButton = styled.button`
  width: fit-content;
  padding: 0.5rem;
  min-width: 10rem;
  cursor: pointer;
  background: rgb(52, 20, 175);
  color: #fff;
  border: 1px solid transparent;
  border-radius: 5px;
  outline: none;

  &:hover {
    background: green;
  }

  &:disabled {
    background: #ececec;
    cursor: not-allowed;
  }

  &:not(:last-of-type) {
    margin-right: 1rem;
  }

  @media (max-width: 950px) {
    padding: 0.2rem;
    min-width: 10rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    min-width: 6rem;
  }

  @media (max-width: 400px) {
    font-size: 0.6rem;
    margin-bottom: 0.3rem;
  }
`;
