import createSagaMiddleware from "redux-saga";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./rootReducer";
import rootSaga from "../sagas/rootSaga";
import { configureStore } from "@reduxjs/toolkit";

const sagaMiddleware = createSagaMiddleware();

const reduxDevTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const middleware = compose(applyMiddleware(sagaMiddleware), reduxDevTools);
  
// const rootStore = createStore(rootReducer,middleware);
const rootStore = configureStore(
  {
      reducer : rootReducer,
      // middleware : () => [sagaMiddleware]
      middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare({ thunk: false }).prepend(sagaMiddleware);
      }
  }
)

sagaMiddleware.run(rootSaga);

export default rootStore