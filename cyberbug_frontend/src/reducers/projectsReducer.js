function projectsReducer(state = { projects: [] }, action) {
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
      const updatedProjects = [...state].map((project) => {
        project.activeProject = false;
        if (project.id === parseInt(action.id)) {
          project.activeProject = true;
        }
        return project;
      });
      return updatedProjects;
    default:
      return state;
  }
}

export default projectsReducer;
