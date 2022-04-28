import { combineReducers } from "redux";
import appState from "./appState/reducer";
import user from "./user/reducer";
import app from "./applicationsList/reducer";

export default combineReducers({
  appState,
  user,
  app,
});
