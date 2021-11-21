import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "./root.reducer";
import Thunk from "redux-thunk";

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(Thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
      (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
