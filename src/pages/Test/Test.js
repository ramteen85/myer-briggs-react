import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Input } from '../../components/Common/Common';
import { questionCollection } from './Questions';
import _ from 'lodash';
import ConfirmBox from '../../components/ConfirmBox/ConfirmBox';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth';

const inputStyle = { width: '1rem', marginRight: '1rem', height: '1rem' };

// points grid
// https://www.youtube.com/watch?v=BDo0lL_MqYo&list=PL7B0C896820BE9A3C&ab_channel=DerekBanas

// questions
// https://www.youtube.com/watch?v=BDo0lL_MqYo&list=PL7B0C896820BE9A3C&ab_channel=DerekBanas

const Test = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [state, setState] = React.useState({
    currentQuestion: 1,
    selected: '',
    personalityPoints: {
      E: 0,
      I: 0,
      S: 0,
      N: 0,
      T: 0,
      F: 0,
      J: 0,
      P: 0,
    },
    questions: questionCollection,
    answers: [],
    result: '',
  });

  const token = useSelector((state) => state.auth?.token);
  const email = useSelector((state) => state.auth?.email);

  const [dialog, setDialog] = React.useState({
    title: 'Confirmation',
    message:
      'If you stop the test before your results are recorded, your previously answered questions will not be saved. Do you wish to stop the test?',
    show: false,
  });

  React.useEffect(() => {
    if (state.result !== '') {
      navigate({
        pathname: '/result',
        search: '?personality=' + state.result,
      });
    }
  }, [state.result, navigate]);

  const stopTest = () => {
    // confirm box
    setDialog({
      ...dialog,
      show: true,
    });
  };

  const previousQuestion = () => {
    let answers = [...state.answers];
    // previous question
    setState({
      ...state,
      selected: answers[state.currentQuestion - 2],
      currentQuestion: state.currentQuestion - 1,
    });
  };

  const nextQuestion = (last) => {
    // get and edit answer array
    let answers = [...state.answers];
    let personalityPoints = { ...state.personalityPoints };
    if (!answers[state.currentQuestion - 1]) {
      // answer does not exist
      answers[state.currentQuestion - 1] = state.selected;
      const letter = state.selected;
      const selectedAnswer = state.questions[state.currentQuestion - 1].answers.filter(
        (a) => a.letter === letter,
      );
      const answerKey = selectedAnswer[0].answerKey;
      personalityPoints[answerKey] = personalityPoints[answerKey] + 1;
    } else {
      // answer exists

      // correct old answer
      const letter = answers[state.currentQuestion - 1];
      const selectedAnswer = state.questions[state.currentQuestion - 1].answers.filter(
        (a) => a.letter === letter,
      );
      const answerKey = selectedAnswer[0].answerKey;
      if (personalityPoints[answerKey] > 0)
        personalityPoints[answerKey] = personalityPoints[answerKey] - 1;

      // score new answer
      const newLetter = state.selected;
      const newSelectedAnswer = state.questions[state.currentQuestion - 1].answers.filter(
        (a) => a.letter === newLetter,
      );
      const newAnswerKey = newSelectedAnswer[0].answerKey;
      personalityPoints[newAnswerKey] = personalityPoints[newAnswerKey] + 1;
      answers[state.currentQuestion - 1] = newLetter;
    }

    const goQuestion = !last ? state.currentQuestion + 1 : state.currentQuestion;
    let selected = '';
    if (answers[state.currentQuestion] && answers[state.currentQuestion] !== '') {
      selected = answers[state.currentQuestion];
    }

    // next question
    setState({
      ...state,
      currentQuestion: goQuestion,
      answers: [...answers],
      personalityPoints: { ...personalityPoints },
      selected: selected,
    });
  };

  const calculateResults = () => {
    let result = '';

    if (state.personalityPoints.E > state.personalityPoints.I) {
      result = result += 'E';
    } else {
      result = result += 'I';
    }

    if (state.personalityPoints.S > state.personalityPoints.N) {
      result = result += 'S';
    } else {
      result = result += 'N';
    }

    if (state.personalityPoints.T > state.personalityPoints.F) {
      result = result += 'T';
    } else {
      result = result += 'F';
    }

    if (state.personalityPoints.J > state.personalityPoints.P) {
      result = result += 'J';
    } else {
      result = result += 'P';
    }

    return result;
  };

  const getResults = async () => {
    //submit last question
    nextQuestion(true);
    // get the test results
    let result = calculateResults();
    setState({ ...state, result: result });

    // save user result
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', authorization: 'Bearer ' + token },
      body: JSON.stringify({
        personality: result,
        email: email,
      }),
    };

    try {
      // get response
      let response = await fetch('/api/user/save-result', requestOptions);
      response = await response.json();
      console.log(response);

      // set the personality
      dispatch(authActions.setPersonality({ personality: response.personality }));

      // go to results page
      navigate('/result?personality=' + result);
    } catch (error) {
      console.log(error);
      navigate('/members');
    }
  };

  const selectOption = (selected) => {
    setState({
      ...state,
      selected: selected,
    });
  };

  const confirm = (value) => {
    setDialog({ ...dialog, show: false });
    if (value === 'y') {
      // set state to initial state
      setState({
        ...state,
        currentQuestion: 1,
        selected: '',
        personalityPoints: {
          E: 0,
          I: 0,
          S: 0,
          N: 0,
          T: 0,
          F: 0,
          J: 0,
          P: 0,
        },
        questions: questionCollection,
        answers: [],
        result: '',
      });

      // back to home page
      navigate('/members');
    }
  };

  return (
    <AppContainer>
      <BoxContainer>
        <IntroHeaderContainer>
          <IntroHeader>{state.questions[state.currentQuestion - 1].text}</IntroHeader>
          <IntroSubHeader>
            ( Question {state.currentQuestion} of {state.questions.length} )
          </IntroSubHeader>
        </IntroHeaderContainer>
        <OptionsContainer>
          {_.map(state.questions[state.currentQuestion - 1].answers, (answer, index) => (
            <FormControl key={index} onClick={() => selectOption(answer.letter)}>
              <Input
                type="checkbox"
                id={`chk${index}`}
                style={inputStyle}
                checked={state.selected === answer.letter}
                onChange={() => {}}
              />
              <span className="tick-wrapper">
                <span
                  className={state.selected === answer.letter ? 'tick' : undefined}
                ></span>
              </span>
              <label htmlFor={`chk${index}`}>
                {answer.letter}: {answer.text}
              </label>
            </FormControl>
          ))}
        </OptionsContainer>
        <ButtonContainer>
          {state.currentQuestion > 1 && (
            <Button onClick={() => previousQuestion()}>Previous</Button>
          )}
          <Button onClick={stopTest}>Stop Test</Button>
          {state.currentQuestion !== state.questions.length && (
            <Button onClick={() => nextQuestion()} disabled={state?.selected === ''}>
              Next
            </Button>
          )}
          {state.currentQuestion === state.questions.length && (
            <Button onClick={() => getResults()} disabled={state?.selected === ''}>
              Get Results
            </Button>
          )}
        </ButtonContainer>
      </BoxContainer>
      <ConfirmBox
        show={dialog.show}
        title={dialog.title}
        message={dialog.message}
        noFunc={() => confirm('n')}
        yesFunc={() => confirm('y')}
      />
    </AppContainer>
  );
};

export default Test;

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
  font-size: 1.5rem;
  font-weight: 700;
  width: 100%;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 1rem;
  }
`;

const IntroSubHeader = styled.p`
  font-size: 0.8rem;
  font-weight: 400;
  width: 100%;
  text-align: center;

  @media (max-width: 400px) {
    font-size: 0.8 rem;
  }
`;

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const FormControl = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  font-size: 0.8rem;
  margin-left: 2rem;
  cursor: pointer;
  padding: 0.2rem;

  & > label {
    position: relative;
    padding-left: 1.5rem;
    color: rgb(52, 20, 175);
    font-size: 1rem;

    @media (max-width: 600px) {
      font-size: 0.8rem;
    }
    @media (max-width: 400px) {
      font-size: 0.6rem;
      padding-left: 0;
    }
  }

  & > input {
    display: none;

    @media (max-width: 400px) {
      display: block;
    }
  }

  .tick-wrapper {
    width: 40px;
    height: 40px;
    border: 2px solid rgb(52, 20, 175);
    // background-color: rgb(52, 20, 175);
    border-radius: 50%;
    padding: 0.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: rotate(55deg);

    @media (max-width: 400px) {
      display: none;
    }
  }

  .tick {
    width: 25px;
    height: 8px;
    position: relative;
    background: rgb(52, 20, 175);
    transform-origin: 0% 0%;
    border-radius: -1px -1px 0px -1px;
    margin-bottom: -3px;
    animation: animate 1s 1;
  }

  .tick::before {
    content: '';
    position: absolute;
    width: 8px;
    height: 40px;
    background: inherit;
    border-radius: inherit;
    right: 0;
    bottom: 5px;
    transform-origin: 0% 100%;
    animation: animate-before 1s 1;
  }

  @keyframes animate {
    0%,
    20% {
      transform: scaleX(0);
    }
    30% {
      transform: scaleX(1);
    }
    95%,
    100% {
      opacity: 1;
    }
  }

  @keyframes animate-before {
    0%,
    30% {
      transform: scaleY(0);
    }
    45% {
      transform: scaleY(1);
    }
    95%,
    100% {
      opacity: 1;
    }
  }

  &:hover {
    background: #ececec;
  }

  &:not(:last-of-type) {
    margin-bottom: 0.5rem;
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

  &:disabled {
    background: #ececec;
    cursor: not-allowed;
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
