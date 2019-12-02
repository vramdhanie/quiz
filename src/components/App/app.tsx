import React from "react";
import styled, { ThemeProvider } from "styled-components";
import { AppProps } from "../../utils/interfaces";
import { BrowserRouter as Router, Route } from "react-router-dom";
import ControlledRoute from "../../utils/ControlledRoute/controlledRoute";
import { connect } from "react-redux";
import { AppState } from "../../store";
import { Mode } from "../../store/system/types";
import { lightTheme, darkTheme } from "../../styles/themes";
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
  position: relative;
`;

const App: React.FC<AppProps> = ({ className, mode }) => {
  return (
    <ThemeProvider theme={mode === Mode.LIGHT ? lightTheme : darkTheme}>
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
            <ControlledRoute path="/score">
              <Score />
            </ControlledRoute>
          </Router>
        </ThemedMain>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export const StyledApp = styled(App)`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;

  @media screen and (min-width: 690px) {
    width: 690px;
    margin: 0 auto;
  }
`;

const mapStateToProps = (state: AppState) => ({
  mode: state.system.mode
});

export default connect(mapStateToProps)(StyledApp);
