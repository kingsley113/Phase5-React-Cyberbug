function auth(
  state = {
    auth: [],
  },
  action
) {
  switch (action.type) {
    case "SET_USER":
      console.log({ current_user: action.user });
      return { current_user: action.user };
    case "LOGOUT":
      return { current_user: null };
    default:
      return state;
  }
}

export default auth;
