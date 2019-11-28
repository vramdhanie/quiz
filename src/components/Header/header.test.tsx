import React from "react";
import ReactDOM from "react-dom";
import Header from "./header";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/themes";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
      <Header />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
