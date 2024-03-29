import React from "react";
import ReactDOM from "react-dom";
import { StyledQuiz } from "./quiz";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/themes";
import { MemoryRouter } from "react-router";
import { fetchQuestions } from "../../store/quiz/actions";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter initialEntries={["/"]}>
      <ThemeProvider theme={lightTheme}>
        <StyledQuiz
          loading={true}
          questions={[]}
          fetchQuestions={fetchQuestions}
          currentQuestion={0}
          maxQuestions={10}
        />
      </ThemeProvider>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
