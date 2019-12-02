import React from "react";
import ReactDOM from "react-dom";
import { StyledApp } from "./app";
import { Mode } from "../../store/system/types";
import { Provider } from "react-redux";
import configureStore from "../../store";

const store = configureStore();

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <Provider store={store}>
      <StyledApp mode={Mode.LIGHT} />
    </Provider>,
    div
  );
  ReactDOM.unmountComponentAtNode(div);
});
