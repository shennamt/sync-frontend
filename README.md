---
marp: true
author: Aaron, Shenna, Xiang Feng
size: 4:3

---

# SYNC
Synchronise Your Next Collaboration

---

# About

Sync enables students and managers worldwide to govern, delegate, and keep track of projects. From tertiary capstones to corporate OKRs, Sync uses simplified project management methodologies to encourage constant collaboration and continuous improvement at every stage.

---

# Purpose

The purpose of developing this App is to create a simple project management tool for people of all ages.

---

# Features
- Register and Login
- Create, read, update and delete projects
- Create, read, update and delete lists
- Create, read, update and delete tasks
- Drag and drop lists or tasks.
- Mark a board as favourite.

---

# Features
- Register and Login
- Create, read, update and delete projects
- Create, read, update and delete lists
- Create, read, update and delete tasks
- Drag and drop lists or cards
- Add a board to a fav.

---

# Used Technologies

| Frontend      	    | Backend                 | Development     	|
|-------------------  |------------------------ |------------------	|
| React         	    | bcrypt                  | nodemon          	|
| react-router  	    | cors                   	|                   |
| react-redux    	    | dotenv                 	|                  	|
| reduxjs-toolkit	    | express-validator      	|                  	|
| react-beautiful-dnd | jsonwebtoken            |                  	|
| query-string   	    | mongoose               	|                  	|
| axios         	    | nodemon               	|                  	|
| emotion-react  	    |                        	|                  	|
| ckeditor       	    |                        	|                  	|

---

## How to run?

- Download nodejs [here](https://nodejs.org/en/download/) 
- For database, you can use local mongodb or mongo atlas. See [here](https://www.mongodb.com/)
- Clone the repository:

  ```git clone git@github.com:shennamt/sync-frontend.git``` 

- CD into directory:

  ```cd sync-frontend```
  ```npm install```
  ```npm run start```

---

- Change directory of terminal and install the backend:

  ```git clone git@github.com:shennamt/sync-backend.git```
  ```cd sync-backend```
  ```npm install```
  ```npm run start```

- Create .env file in server directory and enter required variables

---

# Challenges
- Steep learning curve for react axios
- Not able to transfer identifier from one route to the  next.
- Having to delete and re-install node modules at every merge.

---

# Architecture
- User authentication
App.js
-> Authentication (user.js / userModel.js) -> Local Storage (jwt)
-> Route -> CRUD for users, projects and tasks
-> UseContext -> Login/Logout
-> Redux -> Projects and tasks

---

# Data Model

![Alt text](/src/assets/images/dataModel.png "Sync Logo")

---

# TODO
- User differentiation (student and professional) with updated features for the professional.
- Agile-based project template for professionals.
- Inviting members to the board by email/ assigning.