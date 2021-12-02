import { combineReducers } from "redux";
import bugs from "./bugsReducer";
import projects from "./projectsReducer";
import toggleReducer from "./toggleReducer";
import forms from "./formsReducer";

export default combineReducers({
  bugs,
  projects,
  toggles: toggleReducer,
  forms,
});
