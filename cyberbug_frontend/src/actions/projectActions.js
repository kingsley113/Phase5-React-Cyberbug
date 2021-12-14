import { hideToggle } from "./toggleActions";

export const createProject = (projectObject) => {
  return (dispatch) => {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ project: projectObject }),
    };
    fetch("http://localhost:8000/projects", configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "ADD_PROJECT", project: json.project });
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
    fetch("http://localhost:8000/projects", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
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

export const setActiveProject = (project) => {
  return (dispatch) => {
    dispatch({ type: "SET_ACTIVE_PROJECT", project: project });
  };
};

export const resetActiveProject = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_ACTIVE_PROJECT" });
  };
};

export const editProject = (project) => {
  return (dispatch) => {
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify({ project: project }),
    };
    fetch(`http://localhost:8000/projects/${project.id}`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log("Response Json: ", json);
        dispatch({ type: "EDIT_PROJECT", project: json.project });
        dispatch(hideToggle("newProjectFormToggle"));
      })
      .catch((error) => {
        alert("Error occured editing project");
        console.log(error);
      });
  };
};

export const deleteProject = (project) => {
  return (dispatch) => {
    const configurationObject = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(project),
    };
    fetch(`http://localhost:8000/projects/${project.id}`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "DELETE_PROJECT", project: project });
      })
      .catch((response) => {
        alert("Woops, something went wrong deleting the project");
        console.log(response);
      });
  };
};
