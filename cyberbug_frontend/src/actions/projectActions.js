import { hideToggle } from "./toggleActions";

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
        dispatch({ type: "ADD_PROJECT", project: json });
        dispatch(hideToggle("newProjectFormToggle"));
      })
      .catch((error) => {
        alert("Error occured creating project");
        console.log(error);
      });
  };
};

export const loadProjects = () => {
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

export const setActiveProject = (id) => {
  return (dispatch) => {
    dispatch({ type: "SET_ACTIVE_PROJECT", id: id });
  };
};
