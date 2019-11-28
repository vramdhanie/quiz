import React from "react";
import ReactDOM from "react-dom";
import Footer from "./footer";

import { ThemeProvider } from "styled-components";

import { lightTheme } from "../../styles/themes";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <ThemeProvider theme={lightTheme}>
      <Footer />
    </ThemeProvider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
