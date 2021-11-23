export const createProject = (projectObject) => {
  return (dispatch) => {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ project: projectObject }),
    };
    fetch("http://localhost:8000/projects", configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // console.log(json);
        dispatch({ type: "ADD_PROJECT", project: json });
      })
      .catch((error) => {
        alert("Error occured creating project");
        console.log(error);
      });
  };
};
