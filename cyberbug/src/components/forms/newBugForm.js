import React, { Component } from "react";

class NewBugForm extends Component {
  render() {
    return (
      <div>
        <h2>Create a new bug:</h2>
        {/* TODO: fill in an create form content */}
        <form onSubmit={this.handleOnSubmit}>
          <div className="row">
            <label htmlFor="bug-id" className="col-sm-1 right-align-text">
              Bug ID:{" "}
            </label>
            <input type="text" name="bug-id" className="col-sm-1" />
            <label htmlFor="bug-title" className="col-sm-1 right-align-text">
              Title:{" "}
            </label>
            <input type="text" name="bug-title" className="col-lg-3" />
          </div>
          <div className="row">
            <label
              htmlFor="bug-description"
              className="col-sm-1 right-align-text"
            >
              Description:{" "}
            </label>
            <textarea name="bug-description"></textarea>
          </div>
          <div className="row">
            <label htmlFor="bug-tags" className="col-sm-1 right-align-text">
              Tags:{" "}
            </label>
            <textarea name="bug-tags"></textarea>
          </div>
          <div className="row">
            <label htmlFor="bug-details" className="col-sm-1 right-align-text">
              Details:{" "}
            </label>
            <textarea name="bug-details"></textarea>
          </div>
          <div className="row">
            <label htmlFor="bug-line-no" className="col-sm-1 right-align-text">
              File/Line No:{" "}
            </label>
            <input type="text" name="bug-line-no" className="col-lg-4" />
          </div>
          <div className="row">
            <label htmlFor="bug-priority" className="col-sm-1 right-align-text">
              Priority:{" "}
            </label>
            <select name="bug-priority">
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
              <option value="roadblock">Roadblock</option>
            </select>
            <label htmlFor="bug-due-date">Due Date: </label>
            <input type="date" name="bug-due-date" />
            <label htmlFor="bug-team-member">Assign Team Member:</label>
            <select name="bug-team-member">
              <option value="dummy-member-1">Dummy Team Member 1</option>
              <option value="dummy-member-2">Dummy Team Member 2</option>
              <option value="dummy-member-3">Dummy Team Member 3</option>
              <option value="dummy-member-4">Dummy Team Member 4</option>
              <option value="dummy-member-5">Dummy Team Member 5</option>
            </select>
          </div>
          <div className="row">
            <input type="submit" value="Ew, bugs! (Save)" />
            <button onClick={this.handleOnClick}>Cancel</button>
          </div>
        </form>
      </div>
    );
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    // TODO: submit form logic, store in state and post fetch to API
    console.log("Das bug has been createth, now it is your job to deleteth!");
  };

  handleOnClick = (event) => {
    window.history.back();
    // TODO: better way to implement this? this feels wrong...
  };
}

export default NewBugForm;
