// Open Bugs
export const openBugCount = (project, bugs) => {
  let bugCount = 0;
  if (bugs) {
    for (const bug of bugs) {
      if (bug.project_id === project.id && !bug.bugComplete) {
        bugCount += 1;
      }
    }
  }
  return bugCount;
};

// Overdue Bugs
export const overdueBugCount = (project, bugs) => {
  let bugCount = 0;
  const date = new Date();
  if (bugs) {
    for (const bug of bugs) {
      if (bug.bugDueDate) {
        const dueDate = new Date(bug.bugDueDate);
        if (
          bug.project_id === project.id &&
          dueDate < date &&
          bug.bugComplete === null
        ) {
          bugCount += 1;
        }
      }
    }
  }
  return bugCount;
};

// Closed Bugs
export const closedBugCount = (project, bugs) => {
  let bugCount = 0;
  if (bugs) {
    for (const bug of bugs) {
      if (bug.project_id === project.id && bug.bugComplete) {
        bugCount += 1;
      }
    }
  }
  return bugCount;
};

// Total Bugs
export const totalBugCount = (project, bugs) => {
  let bugCount = 0;
  if (bugs) {
    for (const bug of bugs) {
      if (bug.project_id === project.id) {
        bugCount += 1;
      }
    }
  }
  return bugCount;
};
