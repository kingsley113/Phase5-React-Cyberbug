import { combineReducers } from "redux";
import bugsReducer from "./bugsReducer";
import projects from "./projectsReducer";
// import formsReducer from "./formsReducer";
import toggleReducer from "./toggleReducer";

export default combineReducers({
  bugs: bugsReducer,
  projects,
  // forms: formsReducer,
  toggles: toggleReducer,
});
