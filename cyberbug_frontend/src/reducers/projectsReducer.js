function projects(state = { projects: [] }, action) {
  switch (action.type) {
    case "ADD_PROJECT":
      return { allProjects: [...state.allProjects, action.project] };
    case "LOAD_PROJECTS":
      return { allProjects: state.projects.concat(action.projects) };
    case "EDIT_PROJECT":
      // console.log("Action project:", action.project);
      const updatedProjects = state.allProjects.map((proj) => {
        return proj.projectId === action.project.projectId
          ? action.project
          : proj;
      });
      console.log("updatedProjects:", updatedProjects);
      return { ...state, allProjects: updatedProjects };
    case "DELETE_PROJECT":
      return state;
    case "ADD_BUG_TO_PROJECT":
      return state;
    case "REMOVE_BUG_FROM_PROJECT":
      return state;
    case "SET_ACTIVE_PROJECT":
      // let activeProject = null;
      // console.log("setting active project");
      // console.log(action);
      // const updatedProjects = [...state.allProjects].map((project) => {
      //   project.activeProject = false;
      //   if (project.id === parseInt(action.id)) {
      //     project.activeProject = true;
      //     activeProject = project;
      //   }
      //   return project;
      // });
      // return { allProjects: updatedProjects, activeProject: activeProject };
      return { ...state, activeProject: action.project };
    default:
      return state;
  }
}

export default projects;
