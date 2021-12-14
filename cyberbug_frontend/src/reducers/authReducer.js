function auth(
  state = {
    auth: [],
  },
  action
) {
  switch (action.type) {
    case "SET_USER":
      return {
        currentUser: action.user,
        redirectToDashboard: true,
      };
    case "LOGOUT":
      return {
        currentUser: null,
        redirectToDashboard: false,
        redirectToLogin: true,
      };
    default:
      return state;
  }
}

export default auth;
