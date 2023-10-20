import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Input } from '../../components/Common/Common';
import _ from 'lodash';

const inputStyle = { width: '1rem', marginRight: '1rem', height: '1rem' };

// points grid
// https://www.youtube.com/watch?v=BDo0lL_MqYo&list=PL7B0C896820BE9A3C&ab_channel=DerekBanas

// questions
// https://www.youtube.com/watch?v=BDo0lL_MqYo&list=PL7B0C896820BE9A3C&ab_channel=DerekBanas

const Test = () => {
  const navigate = useNavigate();
  const [state, setState] = React.useState({
    currentQuestion: 1,
    selected: '',
    questions: [
      {
        text: 'At a party do you: ',
        answers: [
          {
            letter: 'A',
            text: 'Interact with many, including strangers',
            answerKey: 'E',
          },
          { letter: 'B', text: 'Interact with a few, known to you', answerKey: 'I' },
        ],
      },
      {
        text: 'Are you more: ',
        answers: [
          {
            letter: 'A',
            text: 'Realistic',
            answerKey: 'S',
          },
          { letter: 'B', text: 'Philosophically inclined', answerKey: 'N' },
        ],
      },
      {
        text: 'Are you more intrigued by: ',
        answers: [
          {
            letter: 'A',
            text: 'Facts',
            answerKey: 'S',
          },
          { letter: 'B', text: 'Comparing similarities', answerKey: 'N' },
        ],
      },
      {
        text: 'Are you usually more: ',
        answers: [
          {
            letter: 'A',
            text: 'Fair minded',
            answerKey: 'T',
          },
          { letter: 'B', text: 'Kind hearted', answerKey: 'F' },
        ],
      },
      {
        text: 'Do you tend to be more: ',
        answers: [
          {
            letter: 'A',
            text: 'Dispassionate',
            answerKey: 'T',
          },
          { letter: 'B', text: 'Sympathetic', answerKey: 'F' },
        ],
      },
      {
        text: 'Do you prefer to work: ',
        answers: [
          {
            letter: 'A',
            text: 'To deadlines',
            answerKey: 'J',
          },
          { letter: 'B', text: 'Just "whenever"', answerKey: 'P' },
        ],
      },
      {
        text: 'Do you tend to choose: ',
        answers: [
          {
            letter: 'A',
            text: 'Rather carefully',
            answerKey: 'J',
          },
          { letter: 'B', text: 'Somewhat impulsively', answerKey: 'P' },
        ],
      },
      {
        text: 'At parties do you: ',
        answers: [
          {
            letter: 'A',
            text: 'Stay late, with increasing energy',
            answerKey: 'E',
          },
          { letter: 'B', text: 'Leave early, with decreasing energy', answerKey: 'I' },
        ],
      },
      {
        text: 'Are you a more: ',
        answers: [
          {
            letter: 'A',
            text: 'Sensible person',
            answerKey: 'S',
          },
          { letter: 'B', text: 'Reflective person', answerKey: 'N' },
        ],
      },
      {
        text: 'Are you more drawn to: ',
        answers: [
          {
            letter: 'A',
            text: 'Hard data',
            answerKey: 'S',
          },
          { letter: 'B', text: 'Complicated ideas', answerKey: 'N' },
        ],
      },
      {
        text: 'Is it more natural to you to be: ',
        answers: [
          {
            letter: 'A',
            text: 'Fair to others',
            answerKey: 'T',
          },
          { letter: 'B', text: 'Nice to others', answerKey: 'F' },
        ],
      },
      {
        text: 'In first approaching others are you more: ',
        answers: [
          {
            letter: 'A',
            text: 'Impersonal and detached',
            answerKey: 'T',
          },
          { letter: 'B', text: 'Personal and engaging', answerKey: 'F' },
        ],
      },
      {
        text: 'Are you usually more: ',
        answers: [
          {
            letter: 'A',
            text: 'Punctual',
            answerKey: 'J',
          },
          { letter: 'B', text: 'Leisurely', answerKey: 'P' },
        ],
      },
      {
        text: 'Does it bother you more having things: ',
        answers: [
          {
            letter: 'A',
            text: 'Incomplete',
            answerKey: 'J',
          },
          { letter: 'B', text: 'Completed', answerKey: 'P' },
        ],
      },
      {
        text: 'In your social groups do you: ',
        answers: [
          {
            letter: 'A',
            text: "Keep abreast of others' happenings",
            answerKey: 'E',
          },
          { letter: 'B', text: 'Get behind on the news', answerKey: 'I' },
        ],
      },
      {
        text: 'Are you usually more interested in: ',
        answers: [
          {
            letter: 'A',
            text: 'Specifics',
            answerKey: 'S',
          },
          { letter: 'B', text: 'Concepts', answerKey: 'N' },
        ],
      },
      {
        text: 'Do you prefer writers who: ',
        answers: [
          {
            letter: 'A',
            text: 'Say what they mean',
            answerKey: 'S',
          },
          { letter: 'B', text: 'Use lots of analogies', answerKey: 'N' },
        ],
      },
      {
        text: 'Are you more naturally: ',
        answers: [
          {
            letter: 'A',
            text: 'Impartial',
            answerKey: 'T',
          },
          { letter: 'B', text: 'Compassionate', answerKey: 'F' },
        ],
      },
      {
        text: 'In judging are you more likely to be: ',
        answers: [
          {
            letter: 'A',
            text: 'Impersonal',
            answerKey: 'T',
          },
          { letter: 'B', text: 'Sentimental', answerKey: 'F' },
        ],
      },
      {
        text: 'Do you usually: ',
        answers: [
          {
            letter: 'A',
            text: 'Settle things',
            answerKey: 'J',
          },
          { letter: 'B', text: 'Keep options open', answerKey: 'P' },
        ],
      },
      {
        text: 'Are you usually rather: ',
        answers: [
          {
            letter: 'A',
            text: 'Quick to agree to a time',
            answerKey: 'J',
          },
          { letter: 'B', text: 'Reluctant to agree to a time', answerKey: 'P' },
        ],
      },
      {
        text: 'In phoning do you: ',
        answers: [
          {
            letter: 'A',
            text: 'Just start talking',
            answerKey: 'E',
          },
          { letter: 'B', text: "Rehearse what you'll say", answerKey: 'I' },
        ],
      },
      {
        text: 'Facts: ',
        answers: [
          {
            letter: 'A',
            text: 'Speak for themselves',
            answerKey: 'S',
          },
          { letter: 'B', text: 'Usually require interpretation', answerKey: 'N' },
        ],
      },
      {
        text: 'Do you prefer to work with: ',
        answers: [
          {
            letter: 'A',
            text: 'Practical information',
            answerKey: 'S',
          },
          { letter: 'B', text: 'Abstract ideas', answerKey: 'N' },
        ],
      },
      {
        text: 'Are you inclined to be more: ',
        answers: [
          {
            letter: 'A',
            text: 'Cool headed',
            answerKey: 'T',
          },
          { letter: 'B', text: 'Warm hearted', answerKey: 'F' },
        ],
      },
      {
        text: 'Would you rather be: ',
        answers: [
          {
            letter: 'A',
            text: 'More just than merciful',
            answerKey: 'T',
          },
          { letter: 'B', text: 'More merciful than just', answerKey: 'F' },
        ],
      },
      {
        text: 'Are you more comfortable: ',
        answers: [
          {
            letter: 'A',
            text: 'Setting a schedule',
            answerKey: 'J',
          },
          { letter: 'B', text: 'Putting things off', answerKey: 'P' },
        ],
      },
      {
        text: 'Are you more comfortable with: ',
        answers: [
          {
            letter: 'A',
            text: 'Written agreements',
            answerKey: 'J',
          },
          { letter: 'B', text: 'Handshake agreements', answerKey: 'P' },
        ],
      },
    ],
    answers: [],
    result: '',
  });

  const stopTest = () => {
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
      questions: [
        {
          text: 'At a party do you: ',
          answers: [
            {
              letter: 'A',
              text: 'Interact with many, including strangers',
              answerKey: 'E',
            },
            { letter: 'B', text: 'Interact with a few, known to you', answerKey: 'I' },
          ],
        },
      ],
      answers: [],
      result: '',
    });

    // back to home page
    navigate('/members');
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

  const nextQuestion = (last = false) => {
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

    // next question
    setState({
      ...state,
      currentQuestion: !last ? state.currentQuestion + 1 : state.currentQuestion,
      answers: [...answers],
      personalityPoints: { ...personalityPoints },
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

  const getResults = () => {
    //submit last question
    nextQuestion(true);
    // get the test results
    let result = calculateResults();
    setState({ ...state, result: result });
  };

  const selectOption = (selected) => {
    setState({
      ...state,
      selected: selected,
    });
  };

  return (
    <AppContainer>
      <BoxContainer>
        <IntroHeaderContainer>
          <IntroHeader>{state.questions[state.currentQuestion - 1].text}</IntroHeader>
          <IntroSubHeader>
            Question {state.currentQuestion} of {state.questions.length}
          </IntroSubHeader>
        </IntroHeaderContainer>
        <OptionsContainer>
          {_.map(state.questions[state.currentQuestion - 1].answers, (answer) => (
            <FormControl>
              <Input
                style={inputStyle}
                type="radio"
                value={answer.letter}
                checked={answer.letter === state.selected}
                onClick={() => selectOption(answer.letter)}
              />{' '}
              {answer.letter}: {answer.text}
            </FormControl>
          ))}
        </OptionsContainer>
        <ButtonContainer>
          {state.currentQuestion > 1 && (
            <Button onClick={previousQuestion}>Previous</Button>
          )}
          <Button onClick={stopTest}>Stop Test</Button>
          {state.currentQuestion !== state.questions.length && (
            <Button onClick={nextQuestion}>Next</Button>
          )}
          {state.currentQuestion === state.questions.length && (
            <Button onClick={getResults}>Get Results</Button>
          )}
        </ButtonContainer>
      </BoxContainer>
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
  font-size: 1rem;
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

  &:not(:last-of-type) {
    margin-bottom: 1rem;
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
