function bugsReducer(
  state = {
    bugs: [],
  },
  action
) {
  // TODO: Build this reducer
  switch (action.type) {
    case "ADD_BUG":
      return { bugs: [...state.bugs, action.bug] };
    case "EDIT_BUG":
      return state;
    case "DELETE_BUG":
      return state;
    default:
      return state;
  }
}

export default bugsReducer;
