import React, { Component } from "react";
import { createBug, editBug } from "../../actions/bugActions";
import { connect } from "react-redux";

import RandomIdGenerator from "../../helpers/randomIdGenerator";

import { showToggle, hideToggle } from "../../actions/toggleActions";
import { renderCleanForm } from "../../actions/formActions";
import ReactTagInput from "@pathofdev/react-tag-input";

class BugForm extends Component {
  state = {
    bugId: RandomIdGenerator.createBase36(6),
    bugTitle: "",
    bugDescription: "",
    bugTags: "bug",
    bugDetails: "",
    bugLineNo: "",
    bugPriority: "Low",
    bugDueDate: "",
    bugStatus: "Not Started",
    project_id: this.props.project.id,
  };

  // FORM
  render() {
    return (
      <div>
        {/* <h2>
          Create a new bug for project {this.props.project.projectId} -{" "}
          {this.props.project.projectTitle}:
        </h2> */}
        <form onSubmit={this.handleOnSubmit} id="bug-form">
          <div name="bugId" className="col-sm-1" id="bug-form-id-stylized">
            {this.state.bugId}
          </div>
          <div id="bug-form-title-stylized">{this.state.bugTitle}</div>
          {/* <label htmlFor="bugId" className="col-sm-1 right-align-text">
              Bug ID:{" "}
            </label> */}
          <div className="row" id="bug-title-row">
            <label htmlFor="bugTitle" className="col-sm-1 right-align-text">
              <b>Title:</b>
            </label>
            <input
              type="text"
              name="bugTitle"
              className="col-lg-3"
              value={this.state.bugTitle}
              onChange={this.handleOnChange}
              required
              placeholder="Project title (required)"
            />
          </div>
          <div className="row">
            <label
              htmlFor="bugDescription"
              className="col-sm-1 right-align-text"
            >
              <b>Description:</b>
            </label>
            <textarea
              name="bugDescription"
              value={this.state.bugDescription}
              onChange={this.handleOnChange}
              placeholder="Description of issue and how to replicate"
            ></textarea>
          </div>
          <div className="row">
            <label htmlFor="bugDetails" className="col-sm-1 right-align-text">
              <b>Details:</b>
            </label>
            <textarea
              name="bugDetails"
              value={this.state.bugDetails}
              onChange={this.handleOnChange}
              placeholder="OS, Browser, Versions, Error Codes, etc."
            ></textarea>
          </div>
          <div className="row" id="tags-row">
            <label htmlFor="bugTags" className="col-sm-1 right-align-text">
              <b>Tags:</b>
            </label>
            {/* *************TAGS*************** */}
            <div id="tag-entry-wrapper">
              <ReactTagInput
                tags={this.state.bugTags.split(",")}
                onChange={(newTags) =>
                  this.setState({ bugTags: newTags.join() })
                }
                placeholder="Type and press enter"
              />
            </div>
            {/* <textarea
              name="bugTags"
              value={this.state.bugTags}
              onChange={this.handleOnChange}
            ></textarea> */}
          </div>
          <div className="row">
            <label htmlFor="bugLineNo" className="col-sm-1 right-align-text">
              <b>File/Line No:</b>
            </label>
            <input
              type="text"
              name="bugLineNo"
              className="col-lg-4"
              value={this.state.bugLineNo}
              onChange={this.handleOnChange}
              placeholder="List the file(s) and line numbers containing the bug."
            />
          </div>
          {/* ******************** */}
          <div className="row" id="selectors-panel">
            <label htmlFor="bugPriority" className="col-sm-1 right-align-text">
              <b>Priority:</b>
            </label>
            <select
              name="bugPriority"
              value={this.state.bugPriority}
              onChange={this.handleOnChange}
              id="priority-input"
            >
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
              <option value="Roadblock">Roadblock</option>
            </select>
            <label htmlFor="bugDueDate" className="col-sm-1 right-align-text">
              <b>Due Date:</b>
            </label>
            <input
              type="date"
              name="bugDueDate"
              value={this.state.bugDueDate}
              onChange={this.handleOnChange}
              id="due-date-input"
            />
            {/* <div> */}
            <label htmlFor="bugStatus" className="col-sm-1 right-align-text">
              <b>Status:</b>
            </label>
            <select
              name="bugStatus"
              value={this.state.bugStatus}
              onChange={this.handleOnChange}
              id="status-input"
            >
              <option value="Not Started">Not Started</option>
              <option value="In Progress">In Progress</option>
              <option value="Complete">Complete</option>
            </select>
            {/* </div> */}
          </div>
          {/* **************************** */}
          {/* BUTTONS */}
          <div className="row form-btn-row">
            <input
              type="submit"
              value="Save Bug (Ew!)"
              className="form-save-btn"
            />
            <button onClick={this.handleOnClick} className="form-cancel-btn">
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }

  // LOAD FORM DATA IF EXISTING BUG
  componentDidMount() {
    if (this.props.activeBug && !this.props.cleanForm) {
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
    if (this.props.cleanForm) {
      // Reset the clean form status after submitting
      this.props.renderCleanForm(false);
      this.props.createBug({ bug: this.state });
    } else {
      this.props.editBug({ bug: this.state });
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
  return {
    activeBug: state.bugs.activeBug,
    cleanForm: state.forms.renderCleanForm,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createBug: (bugObject) => dispatch(createBug(bugObject)),
    editBug: (bugObject) => dispatch(editBug(bugObject)),
    renderCleanForm: (bool) => dispatch(renderCleanForm(bool)),
    showToggle: (id) => dispatch(showToggle(id)),
    hideToggle: (id) => dispatch(hideToggle(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BugForm);
