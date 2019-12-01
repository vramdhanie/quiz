import React, { useEffect } from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../common/buttons";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { Question } from "../../store/quiz/types";
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

interface QuizProps extends StyledProps {
  loading: boolean;
  questions: Question[];
  fetchQuestions: typeof fetchQuestions;
}

const Quiz: React.FC<QuizProps> = ({
  className,
  loading,
  questions,
  fetchQuestions
}) => {
  useEffect(() => {
    if (questions.length === 0) {
      fetchQuestions();
    }
  }, [questions.length]);
  return (
    <ThemedSection className={className}>
      {loading ? (
        <FaSpinner className="icon-spin" />
      ) : (
        <Link to="/score" className="action">
          <PrimaryButton>Score</PrimaryButton>
        </Link>
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
  questions: state.quiz.questions
});

export default connect(mapStateToProps, { fetchQuestions })(StyledQuiz);
