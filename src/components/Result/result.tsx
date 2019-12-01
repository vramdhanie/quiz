import React from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import { FaPlus, FaMinus } from "react-icons/fa";

interface ResultProps extends StyledProps {
  question: string;
  correctAnswer: boolean;
  givenAnswer: boolean;
}

const Result: React.FC<ResultProps> = ({
  className,
  question,
  correctAnswer,
  givenAnswer
}) => {
  const correct = correctAnswer === givenAnswer;

  return (
    <div className={className}>
      <div className={correct ? "correct wrapper" : "wrong wrapper"}>
        <div className="icon">{correct ? <FaPlus /> : <FaMinus />}</div>
        <div className="response">
          <div
            className="text"
            dangerouslySetInnerHTML={{ __html: question }}
          ></div>
          <div className="note">
            Correct answer: {correctAnswer.toString()}; You said:{" "}
            {givenAnswer.toString()}
          </div>
        </div>
      </div>
    </div>
  );
};

export default styled(Result)`
  width: 80%;
  margin: 10px auto;

  .wrapper {
    display: flex;
    padding: 12px;
    border-radius: 5px;
  }

  .icon {
    flex: 1;
  }

  .response {
    flex: 4;
  }

  .text {
    font-size: 1rem;
    font-weight: bold;
  }

  .note {
    font-size: 0.8rem;
    font-weight: normal;
  }

  .wrong {
    color: #d8000c;
    background-color: #ffd2d2;
  }

  .correct {
    color: #4f8a10;
    background-color: #dff2bf;
  }
`;
