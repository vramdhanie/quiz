import React, { useState } from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { PrimaryButton } from "../../common/buttons";
import { updateDifficulty, clearQuestions } from "../../store/quiz/actions";

const DifficultyDiv = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 5px;
  border-bottom: solid 1px ${props => props.theme.secondary.main};
`;

const LabelDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ControlDiv = styled.div`
  flex: 3;
`;

const ButtonNote = styled.div`
  font-size: 0.8rem;
  opacity: 0.6;
  text-transform: none;
`;

interface DifficultySwitcherInterface extends StyledProps {
  updateDifficulty: typeof updateDifficulty;
  clearQuestions: typeof clearQuestions;
  difficulty: string;
}

const DifficultySwitcher: React.FC<DifficultySwitcherInterface> = ({
  className,
  difficulty,
  updateDifficulty,
  clearQuestions
}) => {
  const [diff, setDiff] = useState(
    difficulty === "easy" ? 0 : difficulty === "medium" ? 1 : 2
  );

  const changeDifficulty = () => {
    updateDifficulty(diff === 0 ? "easy" : diff === 1 ? "medium" : "hard");
    clearQuestions();
  };

  return (
    <DifficultyDiv>
      <LabelDiv>Difficulty</LabelDiv>
      <ControlDiv>
        <input
          type="range"
          min="0"
          max="2"
          step="1"
          value={diff}
          onChange={e => setDiff(+e.target.value)}
        />
        <PrimaryButton onClick={() => changeDifficulty()}>
          <div>{diff === 0 ? "easy" : diff === 1 ? "medium" : "hard"}</div>
          <ButtonNote>(Restarts Quiz)</ButtonNote>
        </PrimaryButton>
      </ControlDiv>
    </DifficultyDiv>
  );
};

export const StyledDifficultySwitcher = styled(DifficultySwitcher)``;

const mapStateToProps = (state: AppState) => ({
  difficulty: state.quiz.difficulty
});

export default connect(mapStateToProps, { updateDifficulty, clearQuestions })(
  DifficultySwitcher
);
