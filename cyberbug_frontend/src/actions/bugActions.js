import { hideToggle } from "./toggleActions";

export const createBug = (bugObject) => {
  return (dispatch) => {
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(bugObject),
    };
    fetch(`http://localhost:8000/bugs`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        console.log(json);
        dispatch({ type: "ADD_BUG", bug: json.bug });
        dispatch(hideToggle("newBugFormToggle"));
      })
      .catch((response) => {
        alert("Woops, something went wrong creating the bug");
        console.log(response);
      });
  };
};

export const loadBugs = () => {
  return (dispatch) => {
    fetch("http://localhost:8000/bugs", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "LOAD_BUGS", bugs: json });
      })
      .catch((error) => {
        alert("Error loading bugs");
        console.log(error);
      });
  };
};

export const setActiveBug = (bug) => {
  return (dispatch) => {
    dispatch({ type: "SET_ACTIVE_BUG", bug: bug });
  };
};

export const resetActiveBug = () => {
  return (dispatch) => {
    dispatch({ type: "RESET_ACTIVE_BUG" });
  };
};

export const editBug = (bug) => {
  return (dispatch) => {
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(bug),
    };
    fetch(`http://localhost:8000/bugs/${bug.bug.id}`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "EDIT_BUG", bug: json.bug });
        dispatch(hideToggle("newBugFormToggle"));
      })
      .catch((response) => {
        alert("Woops, something went wrong creating the bug");
        console.log(response);
      });
  };
};

export const completeBug = (bug) => {
  const completedBug = bug;
  completedBug.bugStatus = "Complete";
  completedBug.complete = true;
};

export const deleteBug = (bug) => {
  return (dispatch) => {
    const configurationObject = {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${localStorage.getItem("jwt")}`,
      },
      body: JSON.stringify(bug),
    };
    fetch(`http://localhost:8000/bugs/${bug.bugId}`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "DELETE_BUG", bug: bug });
      })
      .catch((response) => {
        alert("Woops, something went wrong deleting the bug");
        console.log(response);
      });
  };
};
