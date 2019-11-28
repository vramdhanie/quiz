import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { StyledProps } from "../../utils/interfaces";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { lightTheme, darkTheme } from "../../styles/themes";
import Header from "../Header/header";
import Footer from "../Footer/footer";

const ThemedMain = styled.main`
  flex: 1;
  background-color: ${props => props.theme.primary.light};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.primary.text};
`;

const App: React.FC<StyledProps> = ({ className }) => {
  const [theme, setTheme] = useState(lightTheme);
  return (
    <ThemeProvider theme={theme}>
      <div className={className}>
        <Header />
        <ThemedMain>
          <Router>
            <Route path="/" exact>
              <p>Trivia Quest!</p>
            </Route>
            <Route path="/settings">
              <p>Settings</p>
            </Route>
          </Router>
        </ThemedMain>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default styled(App)`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
