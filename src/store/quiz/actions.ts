import {
  Question,
  SET_QUESTIONS,
  UPDATE_DIFFICULTY,
  UPDATE_SCORE
} from "./types";

export function setQuestions(questions: Question[]) {
  return {
    type: SET_QUESTIONS,
    payload: questions
  };
}

export function updateDifficulty(difficulty: string) {
  return {
    type: UPDATE_DIFFICULTY,
    payload: difficulty
  };
}

export function updateScore(score: number) {
  return {
    type: UPDATE_SCORE,
    payload: score
  };
}