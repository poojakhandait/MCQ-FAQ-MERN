Overview
This application is built using the MERN stack (MongoDB, Express, React, Node.js) and is designed to provide a platform for users to access FAQs and take MCQ exams on various subjects. The application features user registration, secure login, and user-specific homepages with access to subject-wise FAQs and MCQs. Admins have the authority to add new questions.

Features
User Registration & Login:

New users can register by providing required information and a password.
Passwords are securely hashed using bcrypt before being stored in the database.
Registered users can log in using their user ID and password.
JSON Web Tokens (JWT) are used for authentication and authorization.
User Homepage:

Upon login, users are directed to their homepage which displays information on various subjects such as Python, JavaScript, React, and Express.
The footer section contains links to different subjects.
Subject-specific Pages:

Clicking on a subject link (e.g., Python) takes the user to the respective subject page containing FAQs.
Each subject page includes an MCQ button that directs users to the MCQ exam page.
MCQ Exams:

Users can solve MCQ questions on the exam page.
Upon submission, results are displayed with correct answers highlighted in green and incorrect answers in red.
Admin Panel:

Only admins have the authority to add new questions to the database.
Technologies Used
Frontend:

React
HTML/CSS
Backend:

Node.js
Express
Database:

MongoDB
Security:

bcrypt for password hashing
JSON Web Tokens (JWT) for authentication and authorization
Installation
Clone the repository:

sh
Copy code
git clone https://github.com/your-username/faq-mcq-application.git
cd faq-mcq-application
Install backend dependencies:

sh
Copy code
cd backend
npm install
Install frontend dependencies:

sh
Copy code
cd ../frontend
npm install
Set up environment variables:

Create a .env file in the backend directory.
Add the following variables:
makefile
Copy code
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
Start the backend server:

sh
Copy code
cd backend
npm start
Start the frontend server:

sh
Copy code
cd ../frontend
npm start
Usage
Navigate to http://localhost:3000 to access the application.
Register as a new user or log in if you already have an account.
Explore subject pages and take MCQ exams.
Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

License
This project is licensed under the MIT License.



