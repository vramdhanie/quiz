import React from "react";
import styled from "styled-components";
import { StyledProps } from "../../utils/interfaces";

const Header: React.FC<StyledProps> = ({ className }) => {
  return (
    <header className={className}>
      <h1>Trivia Quest!</h1>
    </header>
  );
};

export default styled(Header)``;
