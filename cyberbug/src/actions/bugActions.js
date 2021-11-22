export const createBug = (bugObject) => {
  return (dispatch) => {
    // dispatch({ type: "ADD_BUG" }) TODO: add loading action;
    // const formData = bugObject
    console.log(bugObject);
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(bugObject),
    };
    fetch(`http://localhost:3000/bugs`, configurationObject) //TODO: get correct url for fetch and set up post
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "ADD_BUG", bug: json.bug });
      })
      .catch((response) => {
        alert("Woops, something went wrong creating the bug", response);
      });
  };
};
