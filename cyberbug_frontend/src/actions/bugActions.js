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
    fetch(`http://localhost:8000/bugs`, configurationObject) //TODO: get correct url for fetch and set up post
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        dispatch({ type: "ADD_BUG", bug: json });
      })
      .catch((response) => {
        alert("Woops, something went wrong creating the bug");
        console.log(response);
      });
  };
};
