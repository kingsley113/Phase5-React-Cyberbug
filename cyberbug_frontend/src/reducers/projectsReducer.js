function projects(state = { projects: [] }, action) {
  switch (action.type) {
    case "ADD_PROJECT":
      return { allProjects: state.concat(action.project) };
    case "LOAD_PROJECTS":
      return { allProjects: state.projects.concat(action.projects) };
    case "EDIT_PROJECT":
      return state;
    case "DELETE_PROJECT":
      return state;
    case "ADD_BUG_TO_PROJECT":
      return state;
    case "REMOVE_BUG_FROM_PROJECT":
      return state;
    case "SET_ACTIVE_PROJECT":
      let activeProject = null;
      // console.log(state);
      const updatedProjects = [...state.allProjects].map((project) => {
        project.activeProject = false;
        if (project.id === parseInt(action.id)) {
          project.activeProject = true;
          activeProject = project;
        }
        return project;
      });
      return { allProjects: updatedProjects, activeProject: activeProject };
    default:
      return state;
  }
}

export default projects;
