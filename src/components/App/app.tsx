import React, { useEffect } from "react";
import styled from "styled-components";
import { StyledProps } from "../../utils/interfaces";
import storage from "local-storage-fallback";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "../Header/header";
import Footer from "../Footer/footer";

const App: React.FC<StyledProps> = ({ className }) => {
  useEffect(() => {
    storage.setItem("test", "hello");
  });
  return (
    <div className={className}>
      <Header />
      <main className="main">
        <Router>
          <Route path="/" exact>
            <p>Trivia Quest!</p>
          </Route>
          <Route path="/settings">
            <p>Settings</p>
          </Route>
        </Router>
      </main>
      <Footer />
    </div>
  );
};

export default styled(App)`
  text-align: center;
  display: flex;
  flex-direction: column;
  height: 100vh;

  .main {
    flex: 1;
    background-color: #282c34;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }
`;
