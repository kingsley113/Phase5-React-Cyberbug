const currentUser = () => {
  if (localStorage.getItem("current_user")) {
    return JSON.parse(localStorage.getItem("current_user"));
  } else {
    return null;
  }
};

export default currentUser;
