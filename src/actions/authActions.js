export const userLogin = (userData) => {
  return (dispatch) => {
    fetch("https://cyberbug-api.herokuapp.com/api/login", {
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
          localStorage.setItem("current_user", JSON.stringify(data.user));
          dispatch({ type: "SET_USER", user: data.user });
        }
      })
      .catch((error) => console.log(error));
  };
};

export const createUser = (userData) => {
  return (dispatch) => {
    fetch("https://cyberbug-api.herokuapp.com/api/users", {
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
          localStorage.setItem("current_user", JSON.stringify(data.user));
          dispatch({ type: "SET_USER", user: data.user });
        }
      })
      .catch((error) => console.log(error));
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.removeItem("jwt");
    localStorage.removeItem("current_user");
    dispatch({ type: "LOGOUT" });
  };
};
