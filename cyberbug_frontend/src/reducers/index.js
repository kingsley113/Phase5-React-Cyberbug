import { combineReducers } from "redux";
import bugsReducer from "./bugsReducer";
import projects from "./projectsReducer";
import toggleReducer from "./toggleReducer";

export default combineReducers({
  bugs: bugsReducer,
  projects,
  toggles: toggleReducer,
});
