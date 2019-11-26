import React from "react";
import styled from "styled-components";
import StyledProps from "../../util/props";

const App = ({ className }: StyledProps) => {
  return (
    <div className={className}>
      <header className="App-header">
        <p>Trivia Quest!</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get Excited
        </a>
      </header>
    </div>
  );
};

export default styled(App)`
  text-align: center;

  .App-header {
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
  }

  .App-link {
    color: #09d3ac;
  }
`;
