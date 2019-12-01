import {
  QuestionState,
  SET_QUESTIONS,
  UPDATE_DIFFICULTY,
  UPDATE_SCORE,
  QuizActionTypes,
  FETCH_QUESTIONS,
  CLEAR_QUESTIONS,
  INCREMENT_CURRENT,
  ADD_ANSWER
} from "./types";

const initialState: QuestionState = {
  questions: [],
  answers: [],
  difficulty: "easy",
  score: 0,
  loading: false,
  currentQuestion: 0,
  maxQuestions: 10
};

export function quizReducer(state = initialState, action: QuizActionTypes) {
  switch (action.type) {
    case FETCH_QUESTIONS:
      return {
        ...state,
        loading: true
      };
    case SET_QUESTIONS:
      return {
        ...state,
        questions: action.payload,
        loading: false
      };
    case CLEAR_QUESTIONS:
      return {
        ...state,
        questions: [],
        currentQuestion: 0,
        answers: []
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
    case INCREMENT_CURRENT:
      return {
        ...state,
        currentQuestion:
          state.maxQuestions === state.currentQuestion + 1
            ? state.currentQuestion
            : state.currentQuestion + 1
      };
    case ADD_ANSWER:
      return {
        ...state,
        answers: [...state.answers, action.payload]
      };
    default:
      return state;
  }
}
