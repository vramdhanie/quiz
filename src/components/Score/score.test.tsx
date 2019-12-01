import React from "react";
import ReactDOM from "react-dom";
import { StyledScore } from "./score";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/themes";
import { MemoryRouter } from "react-router";
import { clearQuestions } from "../../store/quiz/actions";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter initialEntries={["/"]}>
      <ThemeProvider theme={lightTheme}>
        <StyledScore
          questions={[]}
          answers={[]}
          maxQuestions={10}
          clearQuestions={clearQuestions}
        />
      </ThemeProvider>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
