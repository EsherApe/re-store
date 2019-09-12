import {createStore, applyMiddleware} from "redux";
import reducer from "./reducers";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from "redux-thunk";

const logMiddleware = ({getState, dispatch}) => (next) => (action) => {
  console.log(action.type);
  return next(action);
};

const stringMiddleware = (store) => (next) => (action) => {
  if (typeof action === 'string') {
    return next({
      type: action
    })
  }

  return next(action);
};

const store = createStore(reducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    stringMiddleware,
    logMiddleware
  )
));

export default store;