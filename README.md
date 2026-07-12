# Student Feedback System

## Project Description

Student Feedback System is a web-based application that allows students to submit their feedback online. The submitted feedback is stored in a MySQL database and can be viewed through the application.

## Technologies Used

Frontend:
- HTML
- CSS
- JavaScript

Backend:
- Node.js
- Express.js

Database:
- MySQL

Tools:
- VS Code
- Git
- GitHub

## Features

- Student feedback submission form
- Collects student name, email, course, and feedback
- Stores feedback data in MySQL database
- REST API integration between frontend and backend
- Displays submitted feedback
- Simple and user-friendly interface

## Project Structure

student-feedback-system

├── backend
│   ├── routes
│   │   └── feedback.js
│   ├── db.js
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js
│
├── screenshots
│
└── README.md

## Database Details

Database Name:

student_feedback

Table Name:

feedback

Table Columns:

- id
- name
- email
- course
- feedback
- created_at

## API Endpoints

### 1. Submit Feedback

Method:
POST

Endpoint:

/api/feedback

Description:
Stores student feedback into the MySQL database.


### 2. View Feedback

Method:
GET

Endpoint:

/api/feedback

Description:
Retrieves all submitted feedback from the database.

## How to Run the Project

### Backend Setup

Open terminal:

cd backend

Install dependencies:

npm install

Run server:

node server.js

Backend runs on:

http://localhost:5000


### Frontend Setup

Open:

frontend/index.html

in a browser.

## Output

Students can submit feedback through the form. The feedback is stored in the MySQL database and displayed on the webpage.

## Conclusion

The Student Feedback System demonstrates full-stack web development using HTML, CSS, JavaScript, Node.js, Express.js, and MySQL. It includes frontend design, backend API development, database connectivity, and data handling.