import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { userLogin } from "../../actions/authActions";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
    errors: {},
  };

  render() {
    return (
      <div>
        <form id="login-form" onSubmit={this.handleOnSubmit}>
          <input
            type="text"
            name="username"
            id="username"
            onChange={this.handleOnChange}
            value={this.state.username}
          />
          <label htmlFor="username">Username</label>
          <input
            type="password"
            name="password"
            id="password"
            onChange={this.handleOnChange}
            value={this.state.password}
          />
          <label htmlFor="password">Password</label>
          <div>{this.renderErrors()}</div>
          <div className="centered-flex">
            <input type="submit" id="login-btn" value="Log In" />
            <Link to="/signup">
              <button id="create-account-btn">Create Account</button>
            </Link>
          </div>
        </form>
      </div>
    );
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    if (this.validate()) {
      this.props.userLogin({
        user: { username: username, password: password },
      });
    }
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  validate() {
    let isValid = true;
    let errors = {};

    // Check username
    if (this.state.username === "") {
      isValid = false;
      errors["username"] = "Please enter a username";
    }
    // Check password
    if (this.state.password === "") {
      isValid = false;
      errors["password"] = "Please enter a password";
    }

    this.setState({ errors: errors });
    return isValid;
  }

  renderErrors = () => {
    let errorElements = [];
    if (this.state.errors !== {}) {
      for (const property in this.state.errors) {
        errorElements.push(
          <h3 className="error_text" key={property}>
            {this.state.errors[property]}
          </h3>
        );
      }
    }

    return errorElements;
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    userLogin: (data) => dispatch(userLogin(data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
