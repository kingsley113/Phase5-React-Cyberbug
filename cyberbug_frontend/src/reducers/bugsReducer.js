function bugsReducer(state = { bugs: [] }, action) {
  // TODO: Build this reducer
  switch (action.type) {
    case "ADD_BUG":
      // TODO: double check this action and state return value, is it mutating state?
      return [state.bugs, action.bug];
    case "EDIT_BUG":
      return state;
    case "DELETE_BUG":
      return state;
    default:
      return state;
  }
}

export default bugsReducer;
