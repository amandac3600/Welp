import { combineReducers } from "redux";
import SessionErrorsReducer from "./session_errors_reducer";
import ReviewsErrorsReducer from "./reviews_errors_reducer";

const errorsReducer = combineReducers({
  session: SessionErrorsReducer,
  review: ReviewsErrorsReducer
});

export default errorsReducer;
