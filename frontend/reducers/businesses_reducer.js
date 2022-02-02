import { RECEIVE_BUSINESS, RECEIVE_BUSINESSES } from "../actions/business_actions";

const BusinessesReducer = (state = {}, action) => {
  Object.freeze(state);
  const nextState = Object.assign({}, state);
  switch (action.type) {
    case RECEIVE_BUSINESS:
      nextState[action.business.id] = action.business;
      return nextState;
    case RECEIVE_BUSINESSES:
      return action.businesses;
    default:
      return state;
  }
}

export default BusinessesReducer
