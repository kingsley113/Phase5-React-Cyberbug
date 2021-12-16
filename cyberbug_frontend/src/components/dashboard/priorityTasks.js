import React, { Component } from "react";
import { Link } from "react-router-dom";

class PriorityTasks extends Component {
  render() {
    return (
      <div className="test-border" id="priority-tasks-panel">
        <div className="list-title">
          <h2>Top 10 Priority Bugs</h2>
        </div>
        <table id="priority-tasks-table">
          <thead>
            <tr>
              <th>Bug Id</th>
              <th>Title</th>
              <th>Priority</th>
              <th>Due Date</th>
              <th>Status</th>
              <th>Project</th>
            </tr>
          </thead>
          <tbody>{this.renderPriorityTableRows()}</tbody>
        </table>
      </div>
    );
  }

  renderPriorityTableRows() {
    if (this.props.bugs) {
      let bugArray = [];

      // Roadblock
      let roadblockBugs = this.props.bugs.filter(
        (bug) =>
          bug.bugPriority === "Roadblock" && bug.bugDueDate && !bug.bugComplete
      );
      roadblockBugs.sort((firstBug, secondBug) => {
        return new Date(firstBug.bugDueDate) - new Date(secondBug.bugDueDate);
      });
      bugArray = bugArray.concat(roadblockBugs);

      // Critical
      let criticalBugs = this.props.bugs.filter(
        (bug) =>
          bug.bugPriority === "Critical" && bug.bugDueDate && !bug.bugComplete
      );
      criticalBugs.sort((firstBug, secondBug) => {
        return new Date(firstBug.bugDueDate) - new Date(secondBug.bugDueDate);
      });
      bugArray = bugArray.concat(criticalBugs);

      // High
      let highBugs = this.props.bugs.filter(
        (bug) =>
          bug.bugPriority === "High" && bug.bugDueDate && !bug.bugComplete
      );
      highBugs.sort((firstBug, secondBug) => {
        return new Date(firstBug.bugDueDate) - new Date(secondBug.bugDueDate);
      });
      bugArray = bugArray.concat(highBugs);

      // Medium
      let mediumBugs = this.props.bugs.filter(
        (bug) =>
          bug.bugPriority === "Medium" && bug.bugDueDate && !bug.bugComplete
      );
      mediumBugs.sort((firstBug, secondBug) => {
        return new Date(firstBug.bugDueDate) - new Date(secondBug.bugDueDate);
      });
      bugArray = bugArray.concat(mediumBugs);

      // Low
      let lowBugs = this.props.bugs.filter(
        (bug) => bug.bugPriority === "Low" && bug.bugDueDate && !bug.bugComplete
      );
      lowBugs.sort((firstBug, secondBug) => {
        return new Date(firstBug.bugDueDate) - new Date(secondBug.bugDueDate);
      });
      bugArray = bugArray.concat(lowBugs);

      // Generate table elements and return first 10
      if (bugArray.length > 0) {
        return bugArray
          .map((bug, index) => {
            return (
              <tr key={index}>
                <td>
                  <Link
                    to={`/projects/${this.getProjectIdCode(bug.project_id)}/${
                      bug.bugId
                    }`}
                  >
                    {bug.bugId}
                  </Link>
                </td>
                <td>{bug.bugTitle}</td>
                <td>{bug.bugPriority}</td>
                <td>{new Date(bug.bugDueDate).toLocaleDateString()}</td>
                <td>{bug.bugStatus}</td>
                <td>{this.getProjectIdCode(bug.project_id)}</td>
              </tr>
            );
          })
          .slice(0, 10);
      } else {
        return (
          <tr>
            <td>No Bugs!</td>
          </tr>
        );
      }
    }
  }

  getProjectIdCode(id) {
    if (this.props.projects) {
      const projectList = this.props.projects.filter(
        (project) => project.id === id
      );
      if (projectList.length > 0) {
        return projectList[0].projectId;
      }
    }
  }
}

export default PriorityTasks;
