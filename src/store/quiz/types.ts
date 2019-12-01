export interface Question {
  category: string;
  type: string;
  difficulty: string;
  question: string;
  correct_answer: string;
  incorrect_answers: [string];
}

export interface QuestionState {
  questions: Question[];
  answers: boolean[];
  difficulty: string;
  score: number;
  loading: boolean;
  currentQuestion: number;
  maxQuestions: number;
}

export const SET_QUESTIONS = "SET_QUESTIONS";
export const FETCH_QUESTIONS = "FETCH_QUESTIONS";
export const CLEAR_QUESTIONS = "CLEAR_QUESTIONS";
export const INCREMENT_CURRENT = "INCREMENT_CURRENT";
export const UPDATE_DIFFICULTY = "UPDATE_DIFFICULTY";
export const UPDATE_SCORE = "UPDATE_SCORE";
export const ADD_ANSWER = "ADD_ANSWER";

interface FetchQuestionsAction {
  type: typeof FETCH_QUESTIONS;
}

interface SetQuestionsAction {
  type: typeof SET_QUESTIONS;
  payload: Question[];
}

interface ClearQuestionsAction {
  type: typeof CLEAR_QUESTIONS;
}

interface IncrementCurrent {
  type: typeof INCREMENT_CURRENT;
}

interface UpdateDifficultyAction {
  type: typeof UPDATE_DIFFICULTY;
  payload: string;
}

interface UpdateScoreAction {
  type: typeof UPDATE_SCORE;
  payload: number;
}

interface AddAnswerAction {
  type: typeof ADD_ANSWER;
  payload: boolean;
}

export type QuizActionTypes =
  | SetQuestionsAction
  | FetchQuestionsAction
  | ClearQuestionsAction
  | UpdateDifficultyAction
  | UpdateScoreAction
  | IncrementCurrent
  | AddAnswerAction;
