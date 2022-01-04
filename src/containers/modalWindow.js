import React, { Component } from "react";

class ModalWindow extends Component {
  render() {
    return (
      <div className="modal-container" id="modal-window">
        <div className="drop-shadow-wrapper">
          <div className="modal-content">{this.props.component}</div>
        </div>
      </div>
    );
  }
}

export default ModalWindow;
