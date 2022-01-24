# Phase5-React-Cyberbug

## Demo Video: 
https://www.youtube.com/watch?v=wGOGDfPU2UQ&ab_channel=CameronKingsley

## Description

Cyberbug is a task management React/Redux app aimed at tracking software bugs. It features a simple easy to use user interface to make creating and updating apps easy and efficient. This app also features a fun cyberpunk color scheme and styling.

## Install Instructions

To install this app and run a local copy, follow these steps:

1. Fork and download the repository
2. Open the package in your editor of choice
3. Run the command: 'bundle install' to install all required gems
4. Run the command: 'npm install' to install Node.js
   5.CD into './cyberbug_backend' and start a local rails server with the command 'rails s -p 8000' (Rails API is configured for port 8000)
5. Setup and seed the database with sample data, run the command: 'rails db:reseed'
6. CD into './cyberbug_frontend' and start the Node server with the commant 'npm start'
7. Once running the app page should open in your default browser, if not visit 'http://localhost:3000' in your browser.

## User Instructions

Log In or Create user
Start by entering your login info or selecting 'create user' to make a new account

Dashbaord:

- Upon logging in, you will be presented with the dashboard page with several panels:
- Project list, select a project from the left hand panel to view that projects page
- Top 10 priority bugs - This list will show the top 10 open bugs between all of your projects, sorted by priority and then by due date. Select the bug ID to be taken to that bug's page
- Project Details List - This list shows a detailed list of all the projects and each projects stats. Select the edit icon at left to view the project's page.
- Project Summary Chart - This pie chart shows the number of bugs open by project for an at a glance presentation of project severity.

There are 4 icons at the bottom of the projects list panel:

- Home Icon: this brings to back to the dashboard page
- New Project: this will bring up the new project form
- Settings: this will bring you to the settings and info page
- Logout: this will log you out and return to the login screen

Project Page:

- The project page show further detail on each of its bugs and counts
- Select from the edit or delete buttons at top to modify the project
- Select the 'New Bug' icon to bring up a from and enter all of the relavent details for that particular bug and submit.
- Select a bug from the list to be presented with the details panel for that bug on the right.

Bug Details:

- Select 'Edit Bug' to bring up the form and modify the bug details
- Select 'Squash Bug' to mark the bug as complete and remove it from the open bugs list, the bug will remain on the list for future reference
- Select 'Delete Bug' to completely remove it from the database

## License

MIT open source license, Copyright 2021 Cameron Kingsley

## Contributing

If you notice a problem with the program that you believe needs improvement but you're unable to make the change yourself, you should raise a Github issue containing a clear description of the problem.

If you see an opportunity for improvement and can make the change yourself go ahead and use a typical git workflow to make it happen:

Fork this program's repository
Make the change on your fork, with descriptive commits in the standard format
Open a Pull Request against this repo
The changes will be reviewed and approved or commented in due course.
