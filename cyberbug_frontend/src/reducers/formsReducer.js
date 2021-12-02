// import { showNewBugModal } from "../actions/formActions";

function formsReducer(state = { renderCleanForm: false }, action) {
  switch (action.type) {
    case "RENDER_CLEAN_FORM":
      return { renderCleanForm: action.bool };
    default:
      return state;
  }
}

export default formsReducer;
