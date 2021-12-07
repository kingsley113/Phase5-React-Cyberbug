function auth(
  state = {
    auth: [],
  },
  action
) {
  switch (action.type) {
    case "SET_USER":
      // console.log({ currentUser: action.user });
      return {
        currentUser: action.user,
        redirectToDashboard: true,
      };
    case "LOGOUT":
      return { currentUser: null, userLoggedIn: false };
    default:
      return state;
  }
}

export default auth;
