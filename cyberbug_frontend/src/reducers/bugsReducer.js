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
    case "LOAD_BUGS":
      return { allBugs: state.bugs.concat(action.bugs) };
    case "EDIT_BUG":
      // console.log(action.bug);
      // const updatedBug = state.bugs.allBugs.filter(
      //   (bug) => bug.bugId === action.bug.bugId
      // );
      // console.log(state);
      const updatedBugs = state.allBugs.map((bug) => {
        return bug.bugId === action.bug.bugId ? action.bug : bug;
      });

      return { ...state, allBugs: updatedBugs };
    case "DELETE_BUG":
      return state;
    case "SET_ACTIVE_BUG":
      return { ...state, activeBug: action.bug };
    default:
      return state;
  }
}

export default bugs;
