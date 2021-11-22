export const createBug = (bugObject) => {
  return (dispatch) => {
    // dispatch({ type: "ADD_BUG" }) TODO: add loading action;
    // const formData = bugObject
    console.log(JSON.stringify({ bug: bugObject }));
    const configurationObject = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ bug: bugObject }),
    };
    // fetch("localhost3000/createBug", configurationObject) //TODO: get correct url for fetch and set up post
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((json) => {
    //     dispatch({ type: "ADD_BUG", bug: json.bug });
    //   });
  };
};
