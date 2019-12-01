import React, { useEffect, useState } from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import { PrimaryButton } from "../../common/buttons";
import { Question as QuestionInterface } from "../../store/quiz/types";
import { connect } from "react-redux";
import { AppState } from "../../store";
import Result from "../Result/result";
import { clearQuestions } from "../../store/quiz/actions";
import { useHistory } from "react-router";

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
  maxQuestions: number;
  clearQuestions: typeof clearQuestions;
}

const Score: React.FC<ScoreProps> = ({
  className,
  questions,
  answers,
  maxQuestions,
  clearQuestions
}) => {
  const [total, setTotal] = useState(0);
  const history = useHistory();
  useEffect(() => {
    const right = questions
      .map(
        (question, index) =>
          question.correct_answer.toLowerCase() === answers[index].toString()
      )
      .filter(ans => ans).length;
    setTotal(right);
  }, [total]);

  const resetQuiz = () => {
    clearQuestions();
    history.push("/");
  };

  return (
    <ThemedSection className={className}>
      <div>
        You Scored {total}/{maxQuestions}
      </div>
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
      <div className="action">
        <PrimaryButton onClick={() => resetQuiz()}>Play Again?</PrimaryButton>
      </div>
    </ThemedSection>
  );
};

export const StyledScore = styled(Score)``;

const mapStateToProps = (state: AppState) => ({
  questions: state.quiz.questions,
  answers: state.quiz.answers,
  maxQuestions: state.quiz.maxQuestions
});

export default connect(mapStateToProps, { clearQuestions })(StyledScore);
