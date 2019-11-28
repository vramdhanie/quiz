import React from "react";

import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import logo from "../../images/logo.png";

const ThemedHeader = styled.header`
  background: ${props => props.theme.primary.light};
  color: ${props => props.theme.primary.text};
  padding: 4px;
  display: flex;
  flex-direction: row;
`;

const Header: React.FC<StyledProps> = ({ className }) => {
  return (
    <ThemedHeader className={className}>
      <div className="left">
        <img src={logo} alt="Trivia Quest Logo" className="logo" />
      </div>
      <div className="right">...</div>
    </ThemedHeader>
  );
};

export default styled(Header)`
  .logo {
    object-fit: contain;
    width: 100%;
  }

  .left {
    flex: 4;
  }

  .right {
    flex: 1;
  }
`;
