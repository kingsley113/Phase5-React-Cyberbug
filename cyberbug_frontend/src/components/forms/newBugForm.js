import React, { Component } from "react";
import { createBug, editBug } from "../../actions/bugActions";
import { connect } from "react-redux";

import RandomIdGenerator from "../../helpers/randomIdGenerator";

import { showToggle, hideToggle } from "../../actions/toggleActions";

class NewBugForm extends Component {
  state = {
    bugId: RandomIdGenerator.createBase36(6),
    bugTitle: "",
    bugDescription: "",
    bugTags: "",
    bugDetails: "",
    bugLineNo: "",
    bugPriority: "",
    bugDueDate: "",
    bugTeamMember: "",
    project_id: this.props.project.id,
  };

  // FORM
  render() {
    return (
      <div>
        <h2>
          Create a new bug for project {this.props.project.projectId} -{" "}
          {this.props.project.projectTitle}:
          {/* TODO:Clean this up, this is just for debugging purposes */}
        </h2>
        <form onSubmit={this.handleOnSubmit}>
          <div className="row">
            <label htmlFor="bugId" className="col-sm-1 right-align-text">
              Bug ID:{" "}
            </label>
            <span name="bugId" className="col-sm-1">
              {this.state.bugId}
            </span>
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
              {/* TODO: build out team member function */}
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

  // LOAD FORM DATA IF EXISTING BUG
  componentDidMount() {
    if (this.props.activeBug) {
      this.loadFormData();
    }
  }

  loadFormData() {
    const bug = this.props.activeBug;

    this.setState({ id: bug.id });
    for (const prop in this.state) {
      this.setState({
        [prop]: bug[prop] ? bug[prop] : "",
      });
    }
  }

  // EVENTS
  handleOnSubmit = (event) => {
    event.preventDefault();

    // this.setState({
    //   bugProjectId: this.props.project.id,
    // });
    // TODO: change this to check if creating a new bug or editing a bug
    if (this.props.activeBug) {
      this.props.editBug({ bug: this.state });
    } else {
      this.props.createBug({ bug: this.state });
    }
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
const mapStateToProps = (state) => {
  return { activeBug: state.bugs.activeBug };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBug: (bugObject) => dispatch(createBug(bugObject)),
    editBug: (bugObject) => dispatch(editBug(bugObject)),
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewBugForm);
