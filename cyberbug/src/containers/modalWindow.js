import React, { Component } from "react";

class ModalWindow extends Component {
  render() {
    return (
      <div className="modal-container">
        <div className="modal-content">{this.props.component}</div>
      </div>
    );
  }
}

export default ModalWindow;
