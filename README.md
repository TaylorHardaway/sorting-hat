# Sorting Hat

## Goals
The goal of this project is to test your knowledge and to have a FUN time stretching yourself on your FIRST independent application that will become a part of your portfolio.

Focus on MVP. Do not spend a ton of time styling initially. Hit functionality first and then spend time on the styling of the project using bootstrap.

- READ THROUGH ALL OF THE INFORMATION BELOW before planning how you will tackle the project.
- Check the Issue Tickets to organize your process. You will have all week in class to work on this in class. 
- PLEASE submit questions along with a link to an issue/discussion ticket to the entire instructional team if you need help. We will guide you to the resources that are available to you.
- On Saturday, everyone will present how far they got AND their favorite piece of code that they wrote for everyone to share in the Glory!
- MOST OF ALL HAVE FUN!!!!!

## Instructions
You are in charge of bringing the Hogwarts sorting hat to life! 

This is what the finished app should have:
- To start off with, you will use a [bootstrap jumbotron](https://getbootstrap.com/docs/4.0/components/jumbotron/) to have your sorting hat introduce itself and start the sorting process (by clicking on a button). The form should not be on the DOM until the button click happens.

- A [bootstrap form](https://getbootstrap.com/docs/4.1/components/forms/) will then appear to fill in the student's name and a button to sort. This should then assign the student to a random house (Gryffindor, Hufflepuff, Ravenclaw, or Slytherin). 

- On sorting a student, the form should clear and a [bootstrap card](https://getbootstrap.com/docs/4.1/components/card/) with the student's name and a random house assignment should print below the form. 

- You should also be able to expel a student after they have been sorted, which should remove their card from the student record.

In the end, your app will look something like: 
![Sorting Hat Mockup](https://github.com/nss-nightclass-projects/exercise-vault/raw/master/images/sorting-hat-mockup.png)

[See Demo](https://drt-sortinghat.netlify.app/)

## Technical Requirements
- You MUST plan your project and create issue tickets and a project board fro your project
- You MAY use the `printToDom()` function that we worked on in class, but you also need to be able to explain it if you use it
- You have to create a data structure for your project. Review all the elements that need to be on the DOM and create the structure accordingly
- You must use [Boostrap](https://getbootstrap.com/) to style your page components
- You must use a loop other than a `for loop`
- Your JS file should be comprised of functions, no actions should happen in your code outside of a function except for your initial `init()` function
- Your code MUST be YOUR code. Do not copy and paste code into your project. Type every bit of it out
- Your HTML and JS should all have proper indentation
- Helpful Form: An error message shows if a user tries to sort a student without filling out the form
- You should apply responsive design to your page (aka your app should be designed to work on small screens)

## Add Button Hints
When a new student is added an object should be created and that object should be pushed into an array of students that then prints to the DOM.

## Expel Button Hints
Think of a way you can expel students without just hiding those divs on the page. This would mean when the button is clicked you modify the array of students and pass the new array into your print to dom function.  Double hint - put a unique id in the student object when you create them.

## Optional Bonus
- House Colors: The color of the student's card changes depending on which house they were sorted. 
- Card Ordering: Sort the student cards by some criteria (i.e. alphabetically by name, by house)
- Voldermort's Army: Create a separate container of cards that hold the cards for students that have been expelled. These should be styled differently from Hogwarts students.

Team Planning
Overview
For this study group project, complete all the requirements below. See issue tickets for planning.

Team planning is essential to your success as a developer. The following requirements will guide your planning process while at NSS.

Requirements when starting a project (BEFORE PLANNING)
Create the Issue Template (ISSUE_TEMPLATE)
Create the Pull Request Template (PULL_REQUEST_TEMPLATE)
Codebase Setup (i.e. index.html, styles.css, main.js, etc)
Ensure all team members have access to the repo and have it pulled down on their machines and the setup is running properly
Update repo settings to require 2 reviewers and apply to admin
Create a project board with automated kanban
Create a figma board ensuring all your teammates have access to it (likely via email addresses)
Requirements when planning (BEFORE DEV)
Talk through the project requirements to ensure every understands the premise of the project
Talk through the “user flow” of the project taking notes
Create issue tickets that outline all the pertinent info based on your notes (you can divide an conquer on this, but if you do, your team MUST review all tickets together and all approve of them)
Categorize tickets into Milestones and create these milestones under Issues -> Milestones and add the relevant tickets to the Milestone
Requirements during development
Make sure code is properly formatted
Make sure your code works and is tested before creating a PR
Pull Requests will contain all of the information included on the PR ticket template. DO NOT APPROVE the PR if your teammate has not completed this
Do NOT work someone else’s ticket unless you are pairing or working together
Do NOT rewrite someone else’s code
Do NOT work ahead of your teammates. It is better to help them so that everyone stays together than to “leave anyone behind”
Do NOT add scope to a ticket that you have be assigned without team approval
Have conversations and chat with your teammates to get to know them better
Trust your teammates. You all belong here and can produce good code!
DO NOT and I repeat DO NOT move on to another milestone if there are still tickets in your current milestone. Work TOGETHER as a team to get all tickets in the milestone completed, reviewed, and merged.
Don’t be an asshole! Because they stink...
Follow the PR Review Process:
Reference the issue you are resolving on the PR
Removed all console logs and commented out code
Assign team members to review
Once it has been approved by 2 teammates, the person who created the PR merges it in.
By approving a teammates Pull Request, you are saying that you did the following:
Fetched the teammates' branch to run locally on your machine
Tested the code locally based on the PR instructions
Looked at the code and ask questions using GH Review
Approve the PR
NOTE: Once code is merged to main, it is now the source of truth.

Each team member will need to merge main into their own branches to continue to work, so you will want to make sure that your code works with the new changes.

Requirements for finishing up your project
All members are familiar with all aspects of the code
You have reviewed how you will present your project to the class. EVERY team member will speak for 1 minute each and then answer class questions based on the feature they built.
README is completed with:
Name of the Project
Overview of the project
Link to your wireframes/prototype
Link to the deployed project (will learn in week 5)
Link to your project board (yes...even though it is a part of the repo)
Description of the user
List of features
Screenshots of your project
List of contributors and links to their GH profiles
Link to Loom video walkthrough of your app (no more than 1 minute long! Make it great)

https://www.loom.com/share/cc1f39e7e7ba48dca0b0644f1818c531
