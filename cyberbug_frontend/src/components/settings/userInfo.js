import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    const user = JSON.parse(localStorage.current_user);
    return (
      <div>
        <p>
          <b>Username:</b> {user.username}
        </p>
        <p>
          <b>Name:</b> {user.first_name} {user.last_name}
        </p>
      </div>
    );
  }
}

export default UserInfo;
