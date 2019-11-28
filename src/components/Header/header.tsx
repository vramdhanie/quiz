import React from "react";

import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";

const ThemedHeader = styled.header`
  background: ${props => props.theme.primary.main};
  color: ${props => props.theme.primary.text};
`;

const Header: React.FC<StyledProps> = ({ className }) => {
  return (
    <ThemedHeader className={className}>
      <h1>Trivia Quest!</h1>
    </ThemedHeader>
  );
};

export default styled(Header)``;
