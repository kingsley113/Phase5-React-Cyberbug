import React, { Component } from "react";
import { connect } from "react-redux";
import { createUser } from "../../actions/authActions";

class NewUserForm extends Component {
  state = {
    username: "",
    password: "",
    // password_confirmation: "",
    first_name: "",
    last_name: "",
    // errors: "",
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
          {/* <label htmlFor="password_confirmation">Confirm Password: </label>
          <input
            type="password"
            id="password_confirmation"
            name="password_confirmation"
            value={this.state.password_confirmation}
            onChange={this.handleOnChange}
          /> */}
          <p>{this.state.errors}</p>
          <input type="submit" value="Create User" />
        </form>
      </div>
    );
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    console.log("New user form Submitted!");
    // if (this.validate()) {
    //   //TODO: Submit to dispatch action
    // } else {
    //   alert("Passwords must match");
    // }
    this.props.createUser({ user: this.state });
  };

  validate() {
    // check fields TODO:
    if (this.state.password !== this.state.password_confirmation) {
      this.setState({ errors: { password: "Passwords do not match." } });
      return false;
    } else {
      this.setState({ errors: "" });
      return true;
    }
  }

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    createUser: (userData) => dispatch(createUser(userData)),
  };
};

export default connect(null, mapDispatchToProps)(NewUserForm);
