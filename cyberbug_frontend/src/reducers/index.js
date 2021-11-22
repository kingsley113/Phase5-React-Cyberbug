import { combineReducers } from "redux";
import bugsReducer from "./bugsReducer";
import projectsReducer from "./projectsReducer";

export default combineReducers({
  bugs: bugsReducer,
  projects: projectsReducer,
});
