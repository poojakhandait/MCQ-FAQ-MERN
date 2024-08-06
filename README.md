<h1>Overview</h1>
<p>This application is built using the MERN stack (MongoDB, Express, React, Node.js) and is designed to provide a platform for users to access FAQs and take MCQ exams on various subjects. The application features user registration, secure login, and user-specific homepages with access to subject-wise FAQs and MCQs. Admins have the authority to add new questions.</p>

<h1>Features</h1>
<h3User Registration & Login:></h3>

<p>*New users can register by providing required information and a password.</p>
<p>*Passwords are securely hashed using bcrypt before being stored in the database.</p>
<p>*Registered users can log in using their user ID and password.</p>
<p>*JSON Web Tokens (JWT) are used for authentication and authorization.</p>

<h3>User Homepage:</h3>

<p>*Upon login, users are directed to their homepage which displays information on various subjects such as Python, JavaScript, React, and Express.</p>
<p>*The footer section contains links to different subjects.</p>

<h3>Subject-specific Pages:</h3>

<p>*Clicking on a subject link (e.g., Python) takes the user to the respective subject page containing FAQs.</p>
<p>Each subject page includes an MCQ button that directs users to the MCQ exam page.</p>

<h3>MCQ Exams:</h3>

<p>*Users can solve MCQ questions on the exam page.</p>
<p>Upon submission, results are displayed with correct answers highlighted in green and incorrect answers in red.</p>

<h3>Admin Panel:</h3>

<p>*Only admins have the authority to add new questions to the database.</p>

<h1>Technologies Used</h1>
<h3>#Frontend:</h3>

<p>*React</p>
<p>*HTML/CSS</p>

<h3>#Backend:</h3>

<p>*Express</p>
<p>*Node</p>

<h3>#Database:</h3>

<p>*MongoDB</p>

<h3>#Security:</h3>

<p>*bcrypt for password hashing</p>
<p>*JSON Web Tokens (JWT) for authentication and authorization</p>
