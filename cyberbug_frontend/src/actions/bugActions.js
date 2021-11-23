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
