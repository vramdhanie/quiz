import React from "react";
import styled from "styled-components";

const Header = ({ className }) => {
  return (
    <header className={className}>
      <h1>Trivia Quest!</h1>
    </header>
  );
};

export default styled(Header)``;
