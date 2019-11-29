import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { StyledProps } from "../../utils/interfaces";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { darkTheme } from "../../styles/themes";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Home from "../Home/home";
import Quiz from "../Quiz/quiz";
import Score from "../Score/score";

const ThemedMain = styled.main`
  flex: 1;
  background-color: ${props => props.theme.primary.main};

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: ${props => props.theme.primary.text};
`;

const App: React.FC<StyledProps> = ({ className }) => {
  const [theme] = useState(darkTheme);
  return (
    <ThemeProvider theme={theme}>
      <div className={className}>
        <Header />
        <ThemedMain>
          <Router>
            <Route path="/" exact>
              <Home />
            </Route>
            <Route path="/settings">
              <p>Settings</p>
            </Route>
            <Route path="/quiz">
              <Quiz />
            </Route>
            <Route path="/score">
              <Score />
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

  @media screen and (min-width: 690px) {
    width: 690px;
    margin: 0 auto;
  }
`;
