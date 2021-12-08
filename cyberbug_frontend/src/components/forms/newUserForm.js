import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/authActions";

class NewUserForm extends Component {
  state = {
    username: "",
    password: "",
    first_name: "",
    last_name: "",
    password_confirmation: "",
    errors: {},
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleOnSubmit}>
          <label htmlFor="username">Username: </label>
          <input
            type="text"
            id="username"
            name="username"
            value={this.state.username}
            onChange={this.handleOnChange}
          />
          <label htmlFor="first_name">First Name: </label>
          <input
            type="text"
            id="first_name"
            name="first_name"
            value={this.state.first_name}
            onChange={this.handleOnChange}
          />
          <label htmlFor="last_name">Last Name: </label>
          <input
            type="text"
            id="last_name"
            name="last_name"
            value={this.state.last_name}
            onChange={this.handleOnChange}
          />
          <label htmlFor="password">Password: </label>
          <input
            type="password"
            id="password"
            name="password"
            value={this.state.password}
            onChange={this.handleOnChange}
          />
          <label htmlFor="password_confirmation">Confirm Password: </label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleOnChange}
          />
          <div>{this.renderErrors()}</div>
          <input type="submit" value="Create User" />
        </form>
      </div>
    );
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    const { username, first_name, last_name, password } = this.state;
    if (this.validate()) {
      this.props.createUser({
        user: {
          username: username,
          first_name: first_name,
          last_name: last_name,
          password: password,
        },
      });
    }
  };

  validate() {
    let isValid = true;
    let errors = {};

    // Check username
    if (this.state.username === "") {
      isValid = false;
      errors["username"] = "Please enter a username";
    }
    // Check first name
    if (this.state.first_name === "") {
      isValid = false;
      errors["first_name"] = "Please enter your first name";
    }
    // Check last name
    if (this.state.last_name === "") {
      isValid = false;
      errors["last_name"] = "Please enter your last name";
    }
    // Check password
    if (this.state.password === "") {
      isValid = false;
      errors["password"] = "Please enter a password";
    }
    // Check password confirmation
    if (this.state.password_confirmation !== this.state.password) {
      isValid = false;
      errors["password_confirmation"] = "Passwords do not match";
    }

    this.setState({ errors: errors });
    return isValid;
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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
    createUser: (userData) => dispatch(createUser(userData)),
  };
};

export default connect(null, mapDispatchToProps)(NewUserForm);
