export const renderCleanForm = (bool) => {
  return (dispatch) => {
    dispatch({ type: "RENDER_CLEAN_FORM", bool: bool });
  };
};
