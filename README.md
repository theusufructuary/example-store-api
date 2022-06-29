# example-store-api
An example e-commerce store API inspired by Open Study College

<br>

# *Work In Progress*
*This project is a part-time educational and showcasing project which is currently a work in progress.*

<br>

### **This repo is one of two**
This is the API repo, and contains most of the documentation for this project.

There is also a front-end repo which you can find here: [https://github.com/theusufructuary/example-store-front-end](https://github.com/theusufructuary/example-store-front-end)

<br>

## 1. Set Up
a). To install, clone this repo via the terminal by running:
    
    git clone https://github.com/theusufructuary/example-store-api
    
    cd example-store-api
    
    npm install

b). Launch a local version of the React app:

    npm start

Note: The production environment version of this API is currently already deployed [here.](https://example-store-api.herokuapp.com)

If you're new to Heroku or PostgreSQL on Heroku, [read here for more information](https://devcenter.heroku.com/categories/heroku-postgres)

<br>

## 2. Tech Stack
### **a). Node.js Express API (deployed on Heroku, and will soon use a PostgreSQL database)**
This project uses a Node.js Express API which has been deployed to Heroku (which will soon have a PostgreSQL database to serve the front end app). In a production environment, uneditable mock data would not be used - I have left it this way for now due to time constraints. Given more time, I would have also set up further POST, PUT, PATCH, DELETE routes, and written the PostgreSQL queries based on client requirements.

[Heroku Courses](https://example-store-api.herokuapp.com/courses)

[Heroku Carts](https://example-store-api.herokuapp.com/carts)

### **b). React App (will be deployed to AWS)**
As Noted at the top of this README, there is also a React app which has its own dedicated Github repo. It will soon be hosted with AWS and will use AWS authentication and authorisation tools to implement a user account management system.
In a production environment, I would have spent more time creating a well styled website using CSS modules. I have left it this way for now due to time constraints.

### **c). Testing in Jest for back-end (and will soon use Cypress and Jest for testing the front-end)**
Beyond manual testing that I've been doing at every stage of the project, automated testing is also currently implemented on the backend to test the basic GET routes for this project. As is standard, further automated unit and integrated testing for the other front and back-end code will soon be added to enable a efficient and reliable way to check for bugs and problems with the codebase. In the initial 4 hour timeframe given there wasn't enough time for me to complete this as comprehensively as I'd have liked.

## 3. Time management (updated 13/6/22)
**First four hours:**
- 1 hour 20 mins - Understanding the problem, project planning, setting up Trello/Figma/Github, Designing front end and back end
- 2 hour 00 mins - Creating back-end routes with Express, Automate testing of routes, Create db connection, Deploying to Heroku with PostgreSQL database, *(if there's time: create db table and fill db with mock data instead of sourcing data from repo)*
- 1 hour 40 mins - Creating front-end app and components, Linking with back-end, *(if there's time: Deploy to Netlify)*
- 30 mins - Contingency (where I spent extra time on the front end)

**Extra hour:**
- Writing documentation
- Creating demonstration video