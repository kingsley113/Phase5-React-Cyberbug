function projects(state = { projects: [] }, action) {
  switch (action.type) {
    case "ADD_PROJECT":
      return { allProjects: [...state.allProjects, action.project] };
    case "LOAD_PROJECTS":
      return { allProjects: state.projects.concat(action.projects) };
    case "EDIT_PROJECT":
      const updatedProjects = state.allProjects.map((proj) => {
        return proj.projectId === action.project.projectId
          ? action.project
          : proj;
      });
      return { ...state, allProjects: updatedProjects };
    case "DELETE_PROJECT":
      return {
        allProjects: state.allProjects.filter(
          (project) => project.projectId !== action.project.projectId
        ),
      };
    case "SET_ACTIVE_PROJECT":
      return { ...state, activeProject: action.project };
    default:
      return state;
  }
}

export default projects;
