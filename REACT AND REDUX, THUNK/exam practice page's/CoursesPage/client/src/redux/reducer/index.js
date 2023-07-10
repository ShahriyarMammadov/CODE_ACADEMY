import { combineReducers } from "redux";
import featuredReducer from "./featured.reducer";
import cardReducer from "./card.reducer";

export const rootReducer = combineReducers({
  featuredReducer,
  cardReducer,
});
