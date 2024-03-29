import React from "react";
import ReactDOM from "react-dom";
import Result from "./result";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/themes";
import { MemoryRouter } from "react-router";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter initialEntries={["/"]}>
      <ThemeProvider theme={lightTheme}>
        <Result correctAnswer={true} givenAnswer={true} question="" />
      </ThemeProvider>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
