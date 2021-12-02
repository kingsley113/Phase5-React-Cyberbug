import { hideToggle } from "./toggleActions";

export const createBug = (bugObject) => {
  return (dispatch) => {
    // dispatch({ type: "ADD_BUG" }) TODO: add loading action;
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(bugObject),
    };
    fetch(`http://localhost:8000/bugs`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "ADD_BUG", bug: json });
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
    fetch("http://localhost:8000/bugs")
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

export const editBug = (bug, id) => {
  // TODO: fill this in and connect to backend :)
  return (dispatch) => {
    // dispatch({ type: "ADD_BUG" }) TODO: add loading action;
    const configurationObject = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(bug),
    };
    console.log(bug.bug.id);
    fetch(`http://localhost:8000/bugs/${bug.bug.id}`, configurationObject)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        // console.log(json);
        dispatch({ type: "EDIT_BUG", bug: json });
        dispatch(hideToggle("newBugFormToggle"));
      })
      .catch((response) => {
        alert("Woops, something went wrong creating the bug");
        console.log(response);
      });
  };
};

export const deleteBug = (bug) => {
  // TODO:
};
