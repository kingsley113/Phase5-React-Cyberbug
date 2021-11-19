function projectsReducer(state = [], action) {
  switch (action.type) {
    case "ADD_PROJECT":
      return state;
    case "EDIT_PROJECT":
      return state;
    case "DELETE_PROJECT":
      return state;
    case "ADD_BUG_TO_PROJECT":
      return state;
    case "REMOVE_BUG_FROM_PROJECT":
      return state;
    default:
      return state;
  }
}

export default projectsReducer;
