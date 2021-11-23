// Fetch all projects
export const preloadData = () => {
  // TODO:
  return (dispatch) => {
    fetch("http://localhost:8000/projects")
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_PROJECTS", projects: json });
      })
      .catch((error) => {
        alert("Error loading projects");
        console.log(error);
      });
  };
};
// Fetch all bugs
// set active project
