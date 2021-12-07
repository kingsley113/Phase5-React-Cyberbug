import React, { Component } from "react";

class NewUserForm extends Component {
  state = {
    username: "",
    password: "",
    password_confirmation: "",
    first_name: "",
    last_name: "",
    errors: "",
  };

  render() {
    return (
      <form onSubmit={this.handleOnSubmit}>
        <label for="username">Username: </label>
        <input
          type="text"
          id="username"
          name="username"
          value={this.state.username}
        />
        <label for="first_name">First Name: </label>
        <input
          type="text"
          id="first_name"
          name="first_name"
          value={this.state.first_name}
        />
        <label for="last_name">Last Name: </label>
        <input
          type="text"
          id="last_name"
          name="last_name"
          value={this.state.last_name}
        />
        <label for="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={this.state.password}
        />
        <label for="password_confirmation">Confirm Password: </label>
        <input
          type="password"
          id="password_confirmation"
          name="password_confirmation"
          value={this.state.password_confirmation}
        />
        <p>{this.state.errors}</p>
      </form>
    );
  }

  handleOnSubmit(event) {
    event.preventDefault();
    if (this.validate()) {
      //TODO: Submit to dispatch action
    } else {
      alert("Passwords must match");
    }
  }

  validate() {
    // check passwords
    if (this.state.password !== this.state.password_confirmation) {
      this.setState({ errors: "Passwords do not match." });
      return false;
    } else {
      this.setState({ errors: "" });
      return true;
    }
  }

  handleOnChange(event) {
    this.setState({
      [event.target.name]: event.taget.value,
    });
  }
}

export default NewUserForm;
