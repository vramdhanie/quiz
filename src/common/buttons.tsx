import { styled } from "../styles/themes";

export const Primary = styled.div`
  background: ${props => props.theme.secondary.main};
  color: ${props => props.theme.secondary.text};
  box-shadow: ${props => props.theme.all.lightShadow};
  width: 150px;
  padding: 10px;
  border-radius: 6px;
`;
