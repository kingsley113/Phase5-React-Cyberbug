import React, { Component } from "react";
import BugLineItem from "./bugLineItem";

class BugList extends Component {
  renderBugs = () => {
    if (this.props.bugs && this.props.project) {
      const bugs = this.props.bugs.filter(
        (bug) => bug.project_id === this.props.project.id
      );

      const bugList = bugs.map((bug, id) => {
        return (
          <BugLineItem
            key={id}
            bug={bug}
            url={this.props.route}
            activeBug={this.props.activeBug}
          />
        );
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
        <table id="bug-list">
          <thead>
            <tr>
              <th>Id</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Due</th>
              <th id="bug-status-column">Status</th>
            </tr>
          </thead>
          <tbody>{this.renderBugs()}</tbody>
        </table>
      </div>
    );
  }
}

export default BugList;
