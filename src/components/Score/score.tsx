import React from "react";
import { styled } from "../../styles/themes";
import { StyledProps } from "../../utils/interfaces";
import { Link } from "react-router-dom";
import { PrimaryButton } from "../../common/buttons";

const ThemedSection = styled.section`
  width: 100%;
  height: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Quiz: React.FC<StyledProps> = ({ className }) => {
  return (
    <ThemedSection className={className}>
      The Final Score
      <Link to="/" className="action">
        <PrimaryButton>Home</PrimaryButton>
      </Link>
    </ThemedSection>
  );
};

export default styled(Quiz)``;
