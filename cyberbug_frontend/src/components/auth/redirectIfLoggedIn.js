import { Redirect } from "react-router";

const RedirectIfLoggedIn = (props) => {
  console.log("Redirect Component");
  if (localStorage.getItem("jwt")) {
    return <Redirect to="/dashboard" />;
  } else {
    return props.children;
  }
};

export default RedirectIfLoggedIn;
