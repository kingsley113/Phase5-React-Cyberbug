import { combineReducers } from "redux";
import bugsReducer from "./bugsReducer";
import projectsReducer from "./projectsReducer";
// import formsReducer from "./formsReducer";
import toggleReducer from "./toggleReducer";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
  // forms: formsReducer,
  toggles: toggleReducer,
});
