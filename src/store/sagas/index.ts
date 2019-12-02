import { put, takeLatest, all, select } from "redux-saga/effects";
import { SET_QUESTIONS, FETCH_QUESTIONS } from "../quiz/types";

function* fetchQuestions() {
  const difficulty = yield select(state => state.quiz.difficulty);
  const maxQuestions = yield select(state => state.quiz.maxQuestions);
  const json = yield fetch(
    `https://opentdb.com/api.php?amount=${maxQuestions}&difficulty=${difficulty}&type=boolean`
  ).then(response => response.json());

  yield put({ type: SET_QUESTIONS, payload: json.results });
}

function* actionWatcher() {
  yield takeLatest(FETCH_QUESTIONS, fetchQuestions);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
