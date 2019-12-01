import React, { useEffect } from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import Question from "../Question/question";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { Question as QuestionInterface } from "../../store/quiz/types";
import { FaSpinner } from "react-icons/fa";
import { fetchQuestions } from "../../store/quiz/actions";

const ThemedSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface ProgressProps {
  readonly completed: number;
}

const ProgressBar = styled.div<ProgressProps>`
  background: linear-gradient(
    to right,
    ${props => props.theme.secondary.dark} ${props => props.completed}%,
    ${props => props.theme.secondary.light} ${props => props.completed}%
  );
  height: 15px;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  font-size: 0.8rem;
  border-radius: 5px;
`;

interface QuizProps extends StyledProps {
  loading: boolean;
  questions: QuestionInterface[];
  fetchQuestions: typeof fetchQuestions;
  currentQuestion: number;
  maxQuestions: number;
}

const Quiz: React.FC<QuizProps> = ({
  className,
  loading,
  questions,
  fetchQuestions,
  currentQuestion,
  maxQuestions
}) => {
  useEffect(() => {
    if (!loading && questions.length === 0) {
      fetchQuestions();
    }
  });

  return (
    <ThemedSection className={className}>
      {loading ? (
        <FaSpinner className="icon-spin" />
      ) : (
        <>
          <Question question={questions[currentQuestion]} />
          <ProgressBar completed={((currentQuestion + 1) / maxQuestions) * 100}>
            {currentQuestion + 1} of {maxQuestions}
          </ProgressBar>
        </>
      )}
    </ThemedSection>
  );
};

export const StyledQuiz = styled(Quiz)`
  .icon-spin {
    font-size: 4rem;
    -webkit-animation: icon-spin 2s infinite linear;
    animation: icon-spin 2s infinite linear;
  }

  @-webkit-keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }

  @keyframes icon-spin {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(359deg);
      transform: rotate(359deg);
    }
  }
`;

const mapStateToProps = (state: AppState) => ({
  loading: state.quiz.loading,
  questions: state.quiz.questions,
  currentQuestion: state.quiz.currentQuestion,
  maxQuestions: state.quiz.maxQuestions
});

export default connect(mapStateToProps, { fetchQuestions })(StyledQuiz);
