import { RECEIVE_REVIEW_ERRORS, CLEAR_REVIEW_ERRORS } from "../actions/review_actions";

const ReviewsErrorsReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state)
  switch (action.type) {
    case RECEIVE_REVIEW_ERRORS:
      nextState = action.errors.responseJSON;
      return nextState;
    case CLEAR_REVIEW_ERRORS:
      return [];
    default:
      return state;
  }
};

export default ReviewsErrorsReducer;
