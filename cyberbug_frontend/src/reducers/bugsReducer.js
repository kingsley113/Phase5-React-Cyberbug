function bugs(
  state = {
    bugs: [],
  },
  action
) {
  // TODO: Build this reducer
  switch (action.type) {
    case "ADD_BUG":
      return { allBugs: [...state.allBugs, action.bug] };
    case "EDIT_BUG":
      return state;
    case "DELETE_BUG":
      return state;
    case "LOAD_BUGS":
      return { allBugs: state.bugs.concat(action.bugs) };
    default:
      return state;
  }
}

export default bugs;
