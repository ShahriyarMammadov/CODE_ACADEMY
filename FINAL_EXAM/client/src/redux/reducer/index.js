import cardReducer from "./card.reducer";
import { combineReducers } from "redux";
import favReducer from "./fav.reducer";

export const rootReducer = combineReducers({
  cardReducer,
  favReducer,
});
