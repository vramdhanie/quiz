import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import { systemReducer } from "./system/reducers";
import { quizReducer } from "./quiz/reducers";

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  system: systemReducer,
  quiz: quizReducer
});

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
  const middlewares = [sagaMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);

  const store = createStore(
    rootReducer,
    composeWithDevTools(middleWareEnhancer)
  );

  return store;
}
