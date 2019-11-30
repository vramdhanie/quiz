import {
  QuestionState,
  SET_QUESTIONS,
  UPDATE_DIFFICULTY,
  UPDATE_SCORE,
  QuizActionTypes
} from "./types";

const initialState: QuestionState = {
  questions: [],
  difficulty: "easy",
  score: 0
};

export function quizReducer(state = initialState, action: QuizActionTypes) {
  switch (action.type) {
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload
      };
    case UPDATE_DIFFICULTY:
      return {
        ...state,
        difficulty: action.payload
      };
    case UPDATE_SCORE:
      return {
        ...state,
        score: action.payload
      };
    default:
      return state;
  }
}
