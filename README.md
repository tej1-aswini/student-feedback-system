Student Feedback System

A full-stack web application that allows students to submit feedback and view submitted feedback records. The project uses a frontend interface, a Node.js/Express backend API, and a MySQL database hosted on Aiven.

🚀 Live Demo

Frontend:

https://student-feedback-system-ih4z.onrender.com/

Backend API:

https://student-feedback-backend-epcw.onrender.com

📌 Features

- Student feedback submission form
- Stores feedback data in MySQL database
- Displays submitted feedback cards
- REST API for handling feedback operations
- Cloud database integration using Aiven MySQL
- Backend deployment using Render
- Frontend deployment using Render Static Site

🛠️ Technologies Used

Frontend

- HTML5
- CSS3
- JavaScript

Backend

- Node.js
- Express.js
- MySQL2
- CORS
- dotenv

Database

- MySQL (Aiven Cloud)

Deployment

- GitHub
- Render
- Aiven

📂 Project Structure

student-feedback-system/
│
├── backend/
│   ├── routes/
│   │   └── feedback.js
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
│
└── README.md

⚙️ Installation and Setup

1. Clone the repository

git clone YOUR_GITHUB_REPOSITORY_URL

2. Backend Setup

Go to the backend folder:

cd backend

Install dependencies:

npm install

Create a ".env" file:

DB_HOST=your_database_host
DB_USER=your_database_user
DB_PASSWORD=your_database_password
DB_NAME=defaultdb
DB_PORT=18601

Start the backend:

npm start

Backend runs on:

http://localhost:5000

3. Frontend Setup

Open the "frontend/index.html" file using Live Server or a browser.

🗄️ Database Structure

Database table: "feedback"

Column| Type
id| INT (Primary Key)
name| VARCHAR(100)
email| VARCHAR(100)
message| TEXT
created_at| TIMESTAMP

🔗 API Endpoints

Get all feedback

GET /api/feedback

Submit feedback

POST /api/feedback

Request body:

{
  "name": "Student Name",
  "email": "student@email.com",
  "message": "Feedback message"
}

🌐 Deployment

Backend

- Deployed using Render Web Service
- Connected to Aiven MySQL database

Frontend

- Deployed using Render Static Site

🔒 Environment Variables

Sensitive information such as database passwords are stored in environment variables and are not uploaded to GitHub.

👩‍💻 Author

Tejaswini

📄 License

This project is created for educational purposes.