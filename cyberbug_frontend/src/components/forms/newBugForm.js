import React, { Component } from "react";
import { createBug } from "../../actions/bugActions";
import { connect } from "react-redux";

import { showToggle, hideToggle } from "../../actions/toggleActions";

class NewBugForm extends Component {
  state = {
    bugId: "",
    bugTitle: "",
    bugDescription: "",
    bugTags: "",
    bugDetails: "",
    bugLineNo: "",
    bugPriority: "",
    bugDueDate: "",
    bugTeamMember: "",
    bugProjectId: "", //TODO: make this auto fill the active project ID
  };

  // FORM
  render() {
    return (
      <div>
        <h2>Create a new bug:</h2>
        {/* TODO: fill in an create form content */}
        <form onSubmit={this.handleOnSubmit}>
          <div className="row">
            <label htmlFor="bugId" className="col-sm-1 right-align-text">
              Bug ID:{" "}
            </label>
            <input
              type="text"
              name="bugId"
              className="col-sm-1"
              value={this.state.bugId}
              onChange={this.handleOnChange}
            />
            <label htmlFor="bugTitle" className="col-sm-1 right-align-text">
              Title:{" "}
            </label>
            <input
              type="text"
              name="bugTitle"
              className="col-lg-3"
              value={this.state.bugTitle}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="row">
            <label
              htmlFor="bugDescription"
              className="col-sm-1 right-align-text"
            >
              Description:{" "}
            </label>
            <textarea
              name="bugDescription"
              value={this.state.bugDescription}
              onChange={this.handleOnChange}
            ></textarea>
          </div>
          <div className="row">
            <label htmlFor="bugTags" className="col-sm-1 right-align-text">
              Tags:{" "}
            </label>
            <textarea
              name="bugTags"
              value={this.state.bugTags}
              onChange={this.handleOnChange}
            ></textarea>
          </div>
          <div className="row">
            <label htmlFor="bugDetails" className="col-sm-1 right-align-text">
              Details:{" "}
            </label>
            <textarea
              name="bugDetails"
              value={this.state.bugDetails}
              onChange={this.handleOnChange}
            ></textarea>
          </div>
          <div className="row">
            <label htmlFor="bugLineNo" className="col-sm-1 right-align-text">
              File/Line No:{" "}
            </label>
            <input
              type="text"
              name="bugLineNo"
              className="col-lg-4"
              value={this.state.bugLineNo}
              onChange={this.handleOnChange}
            />
          </div>
          <div className="row">
            <label htmlFor="bugPriority" className="col-sm-1 right-align-text">
              Priority:{" "}
            </label>
            <select
              name="bugPriority"
              value={this.state.bugPriority}
              onChange={this.handleOnChange}
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
              <option value="critical">Critical</option>
              <option value="roadblock">Roadblock</option>
            </select>
            <label htmlFor="bugDueDate">Due Date: </label>
            <input
              type="date"
              name="bugDueDate"
              value={this.state.bugDueDate}
              onChange={this.handleOnChange}
            />
            <label htmlFor="bugTeamMember">Assign Team Member:</label>
            <select
              name="bugTeamMember"
              value={this.state.bugTeamMember}
              onChange={this.handleOnChange}
            >
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

  // EVENTS
  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.createBug({ bug: this.state });
  };

  handleOnChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnClick = (event) => {
    this.props.hideToggle("newBugFormToggle");
  };
}

// REDUX
const mapDispatchToProps = (dispatch) => {
  return {
    createBug: (bugObject) => dispatch(createBug(bugObject)),
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(null, mapDispatchToProps)(NewBugForm);