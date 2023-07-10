import { combineReducers } from "redux";
import { cardReducer } from "./card.reducer";
import { favoritesReducer } from "./favorite.reducer";

export const rootReducer = combineReducers({
  cardReducer,
  favoritesReducer,
});
