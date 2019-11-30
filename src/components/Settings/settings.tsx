import React, { useState } from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import { MdMoreVert } from "react-icons/md";
import ModeSwitcher from "../ModeSwitcher/modeSwitcher";

const MenuIcon = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  color: ${props => props.theme.primary.dark};
  cursor: pointer;
  transition: ${props => props.theme.all.mainTransition};
  &:hover {
    color: ${props => props.theme.primary.main};
    transform: translateY(-5px);
  }
`;

const FullMenu = styled.div`
  width: 300px;
  height: 200px;
  background: ${props => props.theme.secondary.light};
  border: solid 1px ${props => props.theme.secondary.dark};
  padding-top: 20px;
  position: absolute;
  top: 100%;
  right: 10px;
  border-radius: 6px;
  box-shadow: ${props => props.theme.all.darkShadow};
  transition: ${props => props.theme.all.mainTransition};
  &::before {
    position: absolute;
    top: -20px;
    right: 10%;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid ${props => props.theme.secondary.dark};
    content: "";
  }
  &::after {
    position: absolute;
    top: -19px;
    right: 10%;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid ${props => props.theme.secondary.light};
    content: "";
  }
`;

const CloseButton = styled.div`
  width: 15px;
  height: 15px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${props => props.theme.secondary.dark};
  cursor: pointer;
  transition: ${props => props.theme.all.mainTransition};
  position: absolute;
  right: 2px;
  top: 2px;
  border: solid 1px ${props => props.theme.secondary.dark};
  &:hover {
    background: ${props => props.theme.secondary.dark};
    color: ${props => props.theme.secondary.light};
  }
`;

const Settings: React.FC<StyledProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={className}>
      <MenuIcon>
        <MdMoreVert onClick={() => setIsOpen(!isOpen)} />
      </MenuIcon>
      {isOpen ? (
        <FullMenu>
          <CloseButton onClick={() => setIsOpen(!isOpen)}>x</CloseButton>
          <ModeSwitcher />
        </FullMenu>
      ) : (
        ""
      )}
    </div>
  );
};

export default styled(Settings)`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`;
