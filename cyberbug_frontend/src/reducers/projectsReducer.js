function projectsReducer(
  state = {
    projects: [],
  },
  action
) {
  switch (action.type) {
    case "ADD_PROJECT":
      // console.log(action.project);
      // console.log(state);
      // console.log({ projects: [...state.projects, action.project] });
      return { projects: [...state.projects, action.project] };
    case "LOAD_PROJECTS":
      console.log(action.projects);
      // const projects = action.projects.map((project) => {
      //   return project; //TODO:
      // });
      return { projects: [...state.projects, action.projects] };
    case "EDIT_PROJECT":
      return state;
    case "DELETE_PROJECT":
      return state;
    case "ADD_BUG_TO_PROJECT":
      return state;
    case "REMOVE_BUG_FROM_PROJECT":
      return state;
    case "SET_ACTIVE_PROJECT":
      return state;
    default:
      return state;
  }
}

export default projectsReducer;
