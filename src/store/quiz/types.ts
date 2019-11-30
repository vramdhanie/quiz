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
  difficulty: string;
  score: number;
}

export const SET_QUESTIONS = "SET_QUESTIONS";
export const UPDATE_DIFFICULTY = "UPDATE_DIFFICULTY";
export const UPDATE_SCORE = "UPDATE_SCORE";

interface SetQuestionsAction {
  type: typeof SET_QUESTIONS;
  payload: Question[];
}

interface UpdateDifficultyAction {
  type: typeof UPDATE_DIFFICULTY;
  payload: string;
}

interface UpdateScoreAction {
  type: typeof UPDATE_SCORE;
  payload: number;
}

export type QuizActionTypes =
  | SetQuestionsAction
  | UpdateDifficultyAction
  | UpdateScoreAction;
