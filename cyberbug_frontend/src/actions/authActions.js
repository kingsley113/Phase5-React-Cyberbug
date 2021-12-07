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
        console.log("RESPONSE DATA: ", data);
        if (data.jwt && data.user) {
          localStorage.setItem("jwt", data.jwt);
          // TODO: save user info to local storage? use json.stringify
          dispatch({ type: "SET_USER", user: data.user });
        }
        // TODO: add dispatch for error flash message here
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
        if (data.jwt && data.user) {
          localStorage.setItem("jwt", data.jwt);
          dispatch({ type: "SET_USER", user: data.user });
        }
        // TODO: Add dispatch for error flash message here
      })
      .catch((error) => console.log(error));
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("jwt");
    dispatch({ type: "LOGOUT" });
  };
};
