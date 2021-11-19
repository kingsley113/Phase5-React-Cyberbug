function bugsReducer(state = [], action) {
  // TODO: Build this reducer
  switch (action.type) {
    case "ADD_BUG":
      return state;
    case "EDIT_BUG":
      return state;
    case "DELETE_BUG":
      return state;
    default:
      return state;
  }
}

export default bugsReducer;
