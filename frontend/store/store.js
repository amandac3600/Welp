import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import RootReducer from "../reducers/root_reducer";

let middleWare = [thunk];
if (process.env.NODE_ENV === 'development') middleWare.push(logger)
const configureStore = (preloadedState = {}) => {
  return createStore(RootReducer, preloadedState, applyMiddleware(...middleWare));
}

export default configureStore;
