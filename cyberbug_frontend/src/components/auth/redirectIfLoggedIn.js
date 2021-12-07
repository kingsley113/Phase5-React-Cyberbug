import { connect } from "react-redux";
import { Redirect } from "react-router";

const RedirectIfLoggedIn = (props) => {
  console.log("Redirect Component");
  if (localStorage.getItem("jwt") || props.loggedIn) {
    return <Redirect to="/dashboard" />;
  } else {
    return props.children;
  }
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.auth.redirectToDashboard,
  };
};

export default connect(mapStateToProps)(RedirectIfLoggedIn);
