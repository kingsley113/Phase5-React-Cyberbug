function projectsReducer(state = { projects: [] }, action) {
  // const projects = state.projects;

  switch (action.type) {
    case "ADD_PROJECT":
      return state.concat(action.project);
    case "LOAD_PROJECTS":
      return state.projects.concat(action.projects);
    case "EDIT_PROJECT":
      return state;
    case "DELETE_PROJECT":
      return state;
    case "ADD_BUG_TO_PROJECT":
      return state;
    case "REMOVE_BUG_FROM_PROJECT":
      return state;
    case "SET_ACTIVE_PROJECT":
      console.log("inside set active project reducer!");
      console.log(action.projectId);
      return state;
    default:
      return state;
  }
}

export default projectsReducer;
