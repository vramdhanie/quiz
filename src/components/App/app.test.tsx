import React from "react";
import ReactDOM from "react-dom";
import { StyledApp } from "./app";
import { Mode } from "../../store/system/types";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StyledApp mode={Mode.LIGHT} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
