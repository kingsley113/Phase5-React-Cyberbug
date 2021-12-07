export const userLogin = (userData) => {
  return (dispatch) => {
    console.log("User Data: ", userData);

    fetch("http://localhost:8000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", data.jwt);
        // setUser(data.user);
        // TODO: set the user in auth reducer
      })
      .catch((error) => console.log(error));
  };
};

export const createUser = (userData) => {
  return (dispatch) => {
    console.log("User Data: ", userData);

    fetch("http://localhost:8000/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        localStorage.setItem("jwt", data.jwt);
        // setUser(data.user);
        // TODO: set the user in auth reducer
      })
      .catch((error) => console.log(error));
  };
};
