import React from "react";
import { Link } from "react-router-dom";

const BugLineItem = (props) => {
  const { bugId, bugTitle, bugPriority, bugDueDate, updated_at, bugStatus } =
    props.bug;
  const url = props.url;
  // TODO: need to add project status to front and backend
  const updatedDate = new Date(updated_at).toLocaleDateString();
  const dueDate = () =>
    bugDueDate ? new Date(bugDueDate).toLocaleDateString() : "N/A";

  return (
    <tr className={renderActiveHighlight(bugId, props.activeBug)}>
      <td>
        <Link key={bugId} to={`${url}/${bugId}`}>
          {bugId}
        </Link>
      </td>
      <td>{bugTitle}</td>
      <td>{bugPriority}</td>
      <td>{dueDate()}</td>
      <td>{updatedDate}</td>
      <td>{bugStatus}</td>
    </tr>
  );
};

const renderActiveHighlight = (bugId, activeBug) => {
  if (activeBug) {
    return bugId === activeBug.bugId ? "active-bug-row" : null;
  }
};

export default BugLineItem;
