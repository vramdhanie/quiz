import React from "react";
import { StyledProps } from "../interfaces";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { AppState } from "../../store/index";
import { Question as QuestionInterface } from "../../store/quiz/types";

interface ControlledRouteProps extends StyledProps {
  questions: QuestionInterface[];
  path: string;
  children?: any;
}

export const ControlledRoute: React.FC<ControlledRouteProps> = ({
  children,
  questions,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        questions.length > 0 ? children : <Redirect to={{ pathname: "/" }} />
      }
    />
  );
};

const mapStateToProps = (state: AppState) => ({
  questions: state.quiz.questions
});

export default connect(mapStateToProps)(ControlledRoute);
