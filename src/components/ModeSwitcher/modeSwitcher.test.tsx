import React from "react";
import ReactDOM from "react-dom";
import { StyledModeSwitcher } from "./modeSwitcher";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../styles/themes";
import { MemoryRouter } from "react-router";
import { Mode } from "../../store/system/types";
import { changeMode } from "../../store/system/actions";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <MemoryRouter initialEntries={["/"]}>
      <ThemeProvider theme={lightTheme}>
        <StyledModeSwitcher
          className=""
          mode={Mode.LIGHT}
          changeMode={changeMode}
        />
      </ThemeProvider>
    </MemoryRouter>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
