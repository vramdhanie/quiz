import React, { useState, useEffect } from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import { Question as QuestionInterface } from "../../store/quiz/types";
import { connect } from "react-redux";
import { addAnswer, incrementCurrent } from "../../store/quiz/actions";
import { useHistory } from "react-router-dom";

interface QuestionProps extends StyledProps {
  question: QuestionInterface;
  addAnswer: typeof addAnswer;
  incrementCurrent: typeof incrementCurrent;
}

const QuestionContainer = styled.div`
  grid-area: q;
`;

const CategoryDiv = styled.div`
  font-weight: normal;
  font-size: 1rem;
  color: ${props => props.theme.primary.dark};
`;

const QuestionDiv = styled.div`
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.primary.dark};
  text-shadow: 0 0 4px ${props => props.theme.secondary.light};
  font-weight: bold;
`;

interface BooleanButtonProps {
  disabled: boolean;
}

const BooleanButton = styled.div<BooleanButtonProps>`
  background: ${props => props.theme.secondary.light};
  color: ${props => props.theme.secondary.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 0 auto;
  border-radius: 4px;
  font-weight: bold;
  transition: ${props => props.theme.all.mainTransition};
  cursor: pointer;
  &:hover {
    border: solid 1px ${props => props.theme.secondary.light};
    background: transparent;
    color: ${props => props.theme.secondary.light};
  }
`;

const Question: React.FC<QuestionProps> = ({
  className,
  question,
  addAnswer,
  incrementCurrent
}) => {
  const [answered, setAnswered] = useState(false);
  const history = useHistory();

  useEffect(() => {
    setAnswered(false);
  }, [answered]);

  const checkAnswer = (ans: boolean) => {
    if (!answered) {
      setAnswered(true);
      addAnswer(ans);
      incrementCurrent();
      history.push("/score");
    }
  };

  return (
    <div className={className}>
      {question ? (
        <>
          <QuestionContainer>
            <CategoryDiv>{question.category}</CategoryDiv>
            <QuestionDiv
              dangerouslySetInnerHTML={{ __html: question.question }}
            ></QuestionDiv>
          </QuestionContainer>
          <BooleanButton
            className="trueBtn"
            onClick={() => checkAnswer(true)}
            disabled={answered}
          >
            True
          </BooleanButton>
          <BooleanButton
            className="falseBtn"
            onClick={() => checkAnswer(false)}
            disabled={answered}
          >
            False
          </BooleanButton>
        </>
      ) : (
        "Please wait ..."
      )}
    </div>
  );
};

export const StyledQuestion = styled(Question)`
  display: grid;
  grid-template:
    "q q"
    "t f";
  height: 50%;
  width: 90%;

  .trueBtn {
    grid-area: t;
  }

  .falseBtn {
    grid-area: f;
  }
`;

export default connect(null, { addAnswer, incrementCurrent })(StyledQuestion);
