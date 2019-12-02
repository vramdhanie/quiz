import React from "react";
import { styled } from "../../styles/themes";
import { AppProps } from "../../utils/interfaces";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { PrimaryButton } from "../../common/buttons";
import { changeMode } from "../../store/system/actions";
import { Mode } from "../../store/system/types";
import { MdWbSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ModeDiv = styled.div`
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

interface ModeSwitcherInterface extends AppProps {
  changeMode: typeof changeMode;
}

const ModeSwitcher: React.FC<ModeSwitcherInterface> = ({
  className,
  mode,
  changeMode
}) => {
  return (
    <ModeDiv>
      <LabelDiv>Mode</LabelDiv>
      <ControlDiv>
        <PrimaryButton onClick={() => changeMode()}>
          {mode === Mode.LIGHT ? <MdWbSunny /> : <FaMoon />}
        </PrimaryButton>
      </ControlDiv>
    </ModeDiv>
  );
};

export const StyledModeSwitcher = styled(ModeSwitcher)``;

const mapStateToProps = (state: AppState) => ({
  mode: state.system.mode
});

export default connect(mapStateToProps, { changeMode })(StyledModeSwitcher);
