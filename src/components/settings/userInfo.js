import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    const user = JSON.parse(localStorage.current_user);
    return (
      <div>
        <h3>
          <b>Username:</b> {user.username}
        </h3>
        <h3>
          <b>Name:</b> {user.first_name} {user.last_name}
        </h3>
      </div>
    );
  }
}

export default UserInfo;
