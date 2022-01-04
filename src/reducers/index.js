import { combineReducers } from "redux";
import bugs from "./bugsReducer";
import projects from "./projectsReducer";
import toggleReducer from "./toggleReducer";
import forms from "./formsReducer";
import auth from "./authReducer";

export default combineReducers({
  bugs,
  projects,
  toggles: toggleReducer,
  forms,
  auth,
});
