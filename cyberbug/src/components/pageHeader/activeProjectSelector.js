import React, { Component } from "react";

class ActiveProjectSelector extends Component {
  handleOnChange = (event) => {
    console.log("This would switch to project: ", event.target.value);
  };

  render() {
    return (
      <div>
        {/* TODO: fill in selector content */}
        <form>
          <select
            name="active-project"
            id="active-project-dropdown"
            onChange={this.handleOnChange}
          >
            <option value="dummy-project-1">Dummy Project 1</option>
            <option value="dummy-project-2">Dummy Project 2</option>
            <option value="dummy-project-3">Dummy Project 3</option>
            <option value="dummy-project-4">Dummy Project 4</option>
          </select>
        </form>
      </div>
    );
  }
}

export default ActiveProjectSelector;
