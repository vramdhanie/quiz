import React from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";

const ThemedFooter = styled.footer`
  background: ${props => props.theme.primary.dark};
  padding: 4px;
  color: ${props => props.theme.primary.light};
`;

const Footer: React.FC<StyledProps> = ({ className }) => {
  return (
    <ThemedFooter className={className}>&copy; Vincent Ramdhanie</ThemedFooter>
  );
};

export default styled(Footer)`
  font-size: 0.8rem;
`;
