import React from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../common/buttons";
import { Question as QuestionInterface } from "../../store/quiz/types";
import { connect } from "react-redux";
import { AppState } from "../../store";
import Result from "../Result/result";

const ThemedSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

interface ScoreProps extends StyledProps {
  questions: QuestionInterface[];
  answers: boolean[];
}

const Score: React.FC<ScoreProps> = ({ className, questions, answers }) => {
  return (
    <ThemedSection className={className}>
      <div>You Scored 7/10</div>
      <div>
        {questions.map((question, index) => (
          <Result
            question={question.question}
            correctAnswer={question.correct_answer === "True"}
            givenAnswer={answers[index]}
            key={index}
          />
        ))}
      </div>
      <Link to="/" className="action">
        <PrimaryButton>Play Again?</PrimaryButton>
      </Link>
    </ThemedSection>
  );
};

export const StyledScore = styled(Score)``;

const mapStateToProps = (state: AppState) => ({
  questions: state.quiz.questions,
  answers: state.quiz.answers,
  maxQuestions: state.quiz.maxQuestions
});

export default connect(mapStateToProps)(StyledScore);
