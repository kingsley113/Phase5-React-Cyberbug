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

export const overdueBugCount = (project, bugs) => {
  let bugCount = 0;
  const date = new Date();
  if (bugs) {
    for (const bug of bugs) {
      if (bug.bugDueDate < date && !bug.bugComplete) {
        bugCount += 1;
      }
    }
  }
  return bugCount;
};
