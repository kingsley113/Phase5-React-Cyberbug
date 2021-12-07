import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import { userLogin } from "../../actions/authActions";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };

  render() {
    if (localStorage.getItem("jwt")) {
      return <Redirect to="/dashboard" />;
    } else {
      return (
        <div>
          <form id="login-form" onSubmit={this.handleOnSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              name="username"
              id="username"
              onChange={this.handleOnChange}
              value={this.state.username}
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleOnChange}
              value={this.state.password}
            />
            <input type="submit" />
          </form>
        </div>
      );
    }
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.userLogin({ user: this.state });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(userLogin(data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
