import { put, takeLatest, all } from "redux-saga/effects";
import { SET_QUESTIONS, FETCH_QUESTIONS } from "../quiz/types";

function* fetchQuestions() {
  const json = yield fetch(
    "https://opentdb.com/api.php?amount=10&difficulty=medium&type=boolean"
  ).then(response => response.json());

  yield put({ type: SET_QUESTIONS, payload: json.results });
}

function* actionWatcher() {
  yield takeLatest(FETCH_QUESTIONS, fetchQuestions);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
