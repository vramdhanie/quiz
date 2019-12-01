import React from "react";
import ReactDOM from "react-dom";
import { StyledQuestion } from "./question";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/themes";
import { MemoryRouter } from "react-router";
import { Question as QuestionInterface } from "../../store/quiz/types";
import { addAnswer, incrementCurrent } from "../../store/quiz/actions";

it("renders without crashing", () => {
  const div = document.createElement("div");
  const question: QuestionInterface = {
    category: "",
    type: "",
    difficulty: "",
    question: "",
    correct_answer: "",
    incorrect_answers: [""]
  };
  ReactDOM.render(
    <MemoryRouter initialEntries={["/"]}>
      <ThemeProvider theme={lightTheme}>
        <StyledQuestion
          question={question}
          addAnswer={addAnswer}
          incrementCurrent={incrementCurrent}
        />
      </ThemeProvider>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
