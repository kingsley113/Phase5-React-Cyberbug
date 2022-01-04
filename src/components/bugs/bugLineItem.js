import React from "react";
import { Link } from "react-router-dom";

const BugLineItem = (props) => {
  const { bugId, bugTitle, bugPriority, bugDueDate, bugStatus } = props.bug;
  const url = props.url;
  const dueDate = () =>
    bugDueDate ? new Date(bugDueDate).toLocaleDateString() : "N/A";

  return (
    <tr className={renderActiveHighlight(bugId, props.activeBug)}>
      <td className="table-bug-id">
        <Link key={bugId} to={`${url}/${bugId}`}>
          {bugId}
        </Link>
      </td>
      <td>{bugTitle}</td>
      <td>{bugPriority}</td>
      <td>{dueDate()}</td>
      <td className="bug-status">{bugStatus}</td>
    </tr>
  );
};

const renderActiveHighlight = (bugId, activeBug) => {
  if (activeBug) {
    return bugId === activeBug.bugId ? "active-bug-row" : null;
  }
};

export default BugLineItem;
