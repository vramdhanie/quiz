import React from "react";
import styled from "styled-components";

import Header from "../Header/header";
import Footer from "../Footer/footer";

const App = ({ className }) => {
  return (
    <div className={className}>
      <Header />
      <main className="main">
        <p>Trivia Quest!</p>
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
