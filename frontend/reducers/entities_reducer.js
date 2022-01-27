import { combineReducers } from "redux";
import UsersReducer from "./users_reducer";
import BusinessesReducer from "./businesses_reducer";
import ReviewsReducer from "./reviews_reducer";

const EntitiesReducer = combineReducers({
  users: UsersReducer,
  businesses: BusinessesReducer,
  reviews: ReviewsReducer,
});

export default EntitiesReducer;
