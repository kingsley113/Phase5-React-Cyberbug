import React, { Component } from "react";
import { connect } from "react-redux";
import BugLineItem from "./bugLineItem";

class BugList extends Component {
  // constructor(props) {
  //   super();
  //   this.project = props.project;
  //   this.bugs = props.bugs;
  //   this.route = props.route;
  // }

  renderBugs = () => {
    if (this.props.bugs.allBugs) {
      const bugs = this.props.bugs.allBugs.filter(
        (bug) => bug.project_id === this.props.project.id
      );

      const bugList = bugs.map((bug, id) => {
        return <BugLineItem key={id} bug={bug} url={this.props.route} />;
      });
      if (bugList.length > 0) {
        return bugList;
      } else {
        return (
          <tr>
            <td>No Bugs!</td>
          </tr>
        );
      }
    } else {
      return (
        <tr>
          <td>Loading</td>
        </tr>
      );
    }
  };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Due</th>
              <th>Updated</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>{this.renderBugs()}</tbody>
        </table>
        --This is the bug list component :)
        {/* TODO: fill in bug list content */}
        {/* <ul>{this.renderBugs()}</ul> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    bugs: state.bugs,
  };
};

export default connect(mapStateToProps)(BugList);
