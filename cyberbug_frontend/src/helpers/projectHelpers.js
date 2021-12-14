// Single Project Functions
// Open Bugs
export const openBugCount = (project, bugs) => {
  let bugCount = 0;
  if (bugs) {
    for (const bug of bugs) {
      if (bug.project_id === project.id && bug.bugStatus !== "Complete") {
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
          bug.bugStatus !== "Complete"
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
      if (bug.project_id === project.id && bug.bugStatus === "Complete") {
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

// Project Health
export const projectHealth = (project, bugs) => {
  if (project && bugs) {
    const openBugs = openBugCount(project, bugs);
    const totalBugs = totalBugCount(project, bugs);
    const score = (totalBugs - openBugs) / totalBugs;
    const percent = Math.round(score * 100);
    return percent;
  }
};

// Project Status Bar Percents
export const generateProjectStatusBarData = (project, bugs) => {
  if (project && bugs) {
    // open bug %
    const openCount = openBugCount(project, bugs);
    // overdue bug %
    const overdueCount = overdueBugCount(project, bugs);
    // closed bug %
    const closedCount = closedBugCount(project, bugs);
    // these 3 need to add up to 100%
    const totalBugsCount = totalBugCount(project, bugs);

    const openPercent = Math.round(
      ((openCount - overdueCount) / totalBugsCount) * 100
    );
    const overduePercent = Math.round((overdueCount / totalBugsCount) * 100);
    const closedPercent = Math.ceil((closedCount / totalBugsCount) * 100);

    return [openPercent, overduePercent, closedPercent];
  }
};

// Multiple Projects Functions
export const generatePieChartData = (projects, bugs) => {
  // Return an array of arrays, each sub array needs to have first value = project id and 2nd = count
  let chartData = [["Bug", "Count"]];
  if (projects) {
    for (const project of projects) {
      const data = [project.projectId, openBugCount(project, bugs)];
      chartData.push(data);
    }
  }
  return chartData;
};
