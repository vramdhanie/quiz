import { styled } from "../styles/themes";

export const PrimaryButton = styled.div`
  background: ${props => props.theme.primary.dark};
  color: ${props => props.theme.all.white};
  width: 150px;
  padding: 10px;
  border-radius: 6px;

  border: 2px solid ${props => props.theme.primary.main};
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: ${props => props.theme.all.mainSpacing};

  padding: 0.9rem 1.6rem;
  display: inline-block;
  transition: ${props => props.theme.all.mainTransition};
  cursor: pointer;
  &:hover {
    background: transparent;
    color: ${props => props.theme.primary.dark};
  }
`;

export const WhiteButton = styled.div`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: ${props => props.theme.all.mainSpacing};
  color: ${props => props.theme.all.white};
  border: 2px solid ${props => props.theme.primary.text};
  padding: 0.9rem 1.6rem;
  display: inline-block;
  transition: ${props => props.theme.all.mainTransition};
  cursor: pointer;
  &:hover {
    background: ${props => props.theme.primary.text};
    color: ${props => props.theme.primary.main};
  }
`;
