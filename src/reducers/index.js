import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { itemReducer } from "./itemReducer";

export const reducers = combineReducers({
  authReducer,
  itemReducer,
});
