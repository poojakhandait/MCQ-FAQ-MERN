<h1>Overview</h1>
<p>This application is built using the MERN stack (MongoDB, Express, React, Node.js) and is designed to provide a platform for users to access FAQs and take MCQ exams on various subjects. The application features user registration, secure login, and user-specific homepages with access to subject-wise FAQs and MCQs. Admins have the authority to add new questions.</p>

<h1>Features</h1>
<h3>#User Registration & Login:></h3>
<ul>
  <li>New users can register by providing required information and a password.</li>
  <li>Passwords are securely hashed using bcrypt before being stored in the database.</li>
  <li>Registered users can log in using their user ID and password.</li>
  <li>JSON Web Tokens (JWT) are used for authentication and authorization.</li>
</ul>

<h3>#User Homepage:</h3>
<ul>
  <li>Upon login, users are directed to their homepage which displays information on various subjects such as Python, JavaScript, React, and Express.</li>
  <li>The footer section contains links to different subjects.</li>
</ul>

<h3>#Subject-specific Pages:</h3>
<ul>
  <li>Clicking on a subject link (e.g., Python) takes the user to the respective subject page containing FAQs.</li>
  <li>Each subject page includes an MCQ button that directs users to the MCQ exam page.</li>
</ul>

<h3>#MCQ Exams:</h3>
<ul>
  <li>Users can solve MCQ questions on the exam page.</li>
  <li>Upon submission, results are displayed with correct answers highlighted in green and incorrect answers in red.</li>
</ul>

<h3>#Admin Panel:</h3>
<ul>
  <li>Only admins have the authority to add new questions to the database.</li>
</ul>

<h1>Technologies Used</h1>
<h3>#Frontend:</h3>
<ul>
  <li>React</li>
  <li>HTML/CSS</li>
</ul>

<h3>#Backend:</h3>
<ul>
  <li>Express</li>
  <li>Node</li>
</ul>

<h3>#Database:</h3>
<ul>
  <li>MongoDB</li>
</ul>

<h3>#Security:</h3>
<ul>
  <li>bcrypt for password hashing</li>
  <li>JSON Web Tokens (JWT) for authentication and authorization</li>
</ul>

<h1>Installation</h1>

<h3>#Install backend dependencies</h3>
<ul>
  <li>cd backend</li>
  <li>npm install</li>
</ul>

<h3>#Install backend dependencies</h3>
<ul>
  <li>cd ../frontend</li>
  <li>npm install</li>
</ul>

<h3>#Start the backend server:</h3>
<ul>
  <li>cd backend</li>
  <li>npm start</li>
</ul>

<h3>#Start the frontend server:</h3>
<ul>
  <li>cd ../frontend</li>
  <li>npm start</li>
</ul>

<h1>Usage</h1>
<ul>
  <li>Navigate to http://localhost:3000 to access the application. </li>
  <li>Register as a new user or log in if you already have an account.</li>
  <li>Explore subject pages and take MCQ exams.</li>
</ul>





