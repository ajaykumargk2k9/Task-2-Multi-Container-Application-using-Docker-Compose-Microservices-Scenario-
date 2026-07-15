🐳 Project: Multi-Container Application using Docker Compose (Microservices Scenario)

---

🎯 Objective
Deploy a multi-tier application using Docker Compose.

---

🧩 Scenario
We are building a 3-tier application:

Frontend (Nginx)

Backend (Node.js / Flask)

Database (MySQL)

---

📌 Requirements
Create docker-compose.yml

Services:

web (frontend)

app (backend)

db (MySQL)

Use environment variables

Setup networking between containers

----

🔧 Expected Steps
Define services in compose file

Use official images (nginx, mysql)

Link backend with DB

Use volumes for DB data persistence

----

✅ Expected Output
Access application via:

http://localhost
Backend should connect to DB successfully

---

💡 Bonus
Use .env file for credentials

----

📌 Project Overview

This project demonstrates how to build and orchestrate a 3-tier microservices application using Docker Compose. Instead of running each service independently, Docker Compose manages all containers together enabling seamless communication between the frontend, backend and database.

---

The application consists of:

🌐 Frontend: Index.html serving static web pages

⚙️ Backend: Node.js (Express) or Flask REST API

🗄️ Database: MySQL 8 for persistent data storage

Docker Compose automatically creates a network starts containers in the correct order and simplifies deployment with a single command.

----

🎓 Project: Student Management System using Docker Compose


Create the project folder

Open command prompt and run

mkdir student-management

cd student-management

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Student%20Management%20Folder.PNG?raw=true)


---

Open the project in VS Code. VS Code should open with the student-management folder.

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/code%20..png?raw=true)

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/VS%20Code.png?raw=true)

---

Created the folder structure with these folders 

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Folder%20Structure.png?raw=true)


---

Created the backend files 

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Backend.png?raw=true)

---

Created thedatabase & frontend files 

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Database%20&%20frontend%20.png?raw=true)

---

Created the root files, final structure looks like this

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Final%20Folder%20Structure.png?raw=true)

---

Build the Node.js + Express Backend

Open the backend folder

In VS Code open the integrated terminal and navigate to the backend folder 

Initialize a Node.js project

Install required packages

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/npm.png?raw=true)

---

Update package.json

Open package.json and make sure it contains a start script like this

{
  "scripts": {
    "start": "node app.js"
  }
}

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/package.json.png?raw=true)

---

Create app.js

Replace the contents of backend/app.js with

const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student Management Backend is Running!");
});

app.get("/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Ajay",
            course: "Docker"
        },
        {
            id: 2,
            name: "John",
            course: "Node.js"
        }
    ]);
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/app.json.png?raw=true)

---

Start the backend with the command 

npm start

We should see: Server is running on port 3000

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/npm%20start.png?raw=true)

---

Test the API

Open your browser and visit:

Home page

Expected output: Student Management Backend is Running!

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Test%20the%20API.png?raw=true)

---

Students API

http://localhost:3000/students

Expected output

[
  {
    "id": 1,
    "name": "Ajay",
    "course": "Docker"
  },
  {
    "id": 2,
    "name": "John",
    "course": "Node.js"
  }
]

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Students%20API.png?raw=true)


---

Create the MySQL Database

Pull the MySQL image and verify the image

Open the terminal and run: 

docker pull mysql:8.0

docker images

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Pull%20images.png?raw=true)

---

Create a Docker volume

We'll use a volume so our database data isn't lost when the container stops.

docker volume create mysql-data

Verify it with:

docker volume ls

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Docker%20volume%20.png?raw=true)

---

Start the MySQL container and verify the container is running

docker run -d --name mysql-container -e MYSQL_ROOT_PASSWORD=root123 -e MYSQL_DATABASE=studentdb -p 3306:3306 -v mysql-data:/var/lib/mysql mysql:8.0

docker ps

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Start%20the%20container%20.png?raw=true)

---

Check the logs 

docker logs mysql-container

wait until you see a message similar to 

ready for connections 

This means MySQL has started successfully.

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Docker%20Logs.png?raw=true)

---

Connect to MySQL

docker exec -it mysql-container mysql -u root -p

When prompted enter: root123

We should see the MySQL prompt: 

mysql>

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Connect%20to%20MySql.png?raw=true)

---

Show the databases

At the MySQL prompt run:

SHOW DATABASES;

Use the database

USE studentdb;

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Show%20databases.png?raw=true)

---

Create the students table

CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    course VARCHAR(100),
    phone VARCHAR(20)
);

Verify the table

SHOW TABLES;

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Create%20table%20.png?raw=true)

---

Insert sample data

INSERT INTO students(name,email,course,phone)
VALUES
('Ajay','ajay@example.com','Docker','9876543210'),
('John','john@example.com','Node.js','9876543211');

Verify the data

SELECT * FROM students;

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Insert%20table.png?raw=true)

---

Exit MySQL

EXIT;

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Exit.png?raw=true)


---

Connect Node.js Backend to MySQL

Our backend will fetch data directly from the MySQL database running in Docker.

Create a Database Connection

Inside the backend folder create a file structure

Add Database Connection Code

Create backend/db.js:

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root123",
    database: "studentdb"
});

connection.connect((err) => {
    if (err) {
        console.log("Database connection failed");
        console.log(err);
    } else {
        console.log("Connected to MySQL");
    }
});

module.exports = connection;

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/db.js.png?raw=true)

---

Update app.js

Replace our current app.js with:

const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Student Management Backend is Running!");
});

app.get("/students", (req, res) => {

    db.query("SELECT * FROM students", (err, result) => {

        if (err) {
            return res.status(500).json(err);
        }

        res.json(result);

    });

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/app.js.png?raw=true)

---

Enter the Backend directory and start the backend 

npm start

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Enter%20and%20start%20backend.png?raw=true)

---

Test the API

Open: http://localhost:3000/students

We should see the student records we inserted

[
  {
    "id": 1,
    "name": "Ajay",
    "email": "ajay@example.com",
    "course": "Docker",
    "phone": "9876543210"
  },
  {
    "id": 2,
    "name": "John",
    "email": "john@example.com",
    "course": "Node.js",
    "phone": "9876543211"
  }
]

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Test%20the%20Backend%20api.png?raw=true)


---

Build the Frontend

Create a simple web page that displays student data by calling our backend API.

Open the frontend folder and create a file structure

Create index.html

Replace its contents with:

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Management System</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <h1>Student Management System</h1>

    <button onclick="loadStudents()">
        Load Students
    </button>

    <table id="studentsTable">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Course</th>
                <th>Phone</th>
            </tr>
        </thead>

        <tbody>

        </tbody>

    </table>

<script src="script.js"></script>

</body>
</html>

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/index.html.png?raw=true)

---

Create style.css

body{
    font-family: Arial;
    margin:40px;
}

h1{
    color:#333;
}

button{
    padding:10px 20px;
    margin-bottom:20px;
    cursor:pointer;
}

table{
    border-collapse:collapse;
    width:100%;
}

table,th,td{
    border:1px solid black;
}

th,td{
    padding:10px;
    text-align:left;
}

th{
    background:#f2f2f2;
}

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/style.css.png?raw=true)

---

Create script.js

async function loadStudents(){

    const response = await fetch("http://localhost:3000/students");

    const students = await response.json();

    const tbody = document.querySelector("#studentsTable tbody");

    tbody.innerHTML = "";

    students.forEach(student => {

        tbody.innerHTML += `
            <tr>
                <td>${student.id}</td>
                <td>${student.name}</td>
                <td>${student.email}</td>
                <td>${student.course}</td>
                <td>${student.phone}</td>
            </tr>
        `;

    });

}

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/script.js.png?raw=true)

---

Run the Frontend

Since we haven't added Nginx yet we can use the Live Server extension in VS Code.

Open Extensions (Ctrl + Shift + X).

Search for Live Server by Ritwick Dey.

Install it.

Right-click index.html.

Select Open with Live Server.

Our browser will open a local address such as:

http://127.0.0.1:5500

Test the Application

Make sure Node.js backend is running

npm start

Open the frontend in our browser.

Click Load Students.

We should see the student records from MySQL displayed in the table.

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Live%20Server.png?raw=true)

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Open%20Live%20Server.png?raw=true)

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Frontend%20.png?raw=true)

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Frondend%20records.png?raw=true)

---

Dockerize the Backend

Containerize the Node.js backend so it runs inside Docker instead of directly on our computer.

The backend will still connect to MySQL using localhost only if we're running MySQL on your host. Since your MySQL is already in a Docker container we'll temporarily use Docker networking with host.docker.internal. 

Update db.js

Replace

host: "localhost"

with

host: "host.docker.internal"

So it becomes

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "host.docker.internal",
    user: "root",
    password: "root123",
    database: "studentdb"
});

connection.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log("Connected to MySQL");
    }
});

module.exports = connection;

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/db.js%20update.png?raw=true)

---

Create the Backend Dockerfile

Create backend/Dockerfile

FROM node:22-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/docker%20compose%20dockerfile.png?raw=true)


---

Build the Docker Image

From the backend folder run

docker build -t student-backend .

Verify

docker images

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/docker%20compose%20docker%20build%20.png?raw=true)

---

Run the Backend Container

docker run -d -p 3000:3000 --name student-backend-container student-backend

Verify the Container

docker ps

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/docker%20compose%20ps%20.png?raw=true)

---

Check the Logs

docker logs student-backend-container

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/docker%20compose%20logs.png?raw=true)

---

Test the API

http://localhost:3000/students

We should see the student records from MySQL.

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Testing%20docker%20compose%20students%20.png?raw=true)

---

Stop and Remove the Container

docker stop student-backend-container

docker rm student-backend-container

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Stop%20and%20remove%20docker%20compose%20container%20.png?raw=true)

---

Dockerize the Frontend Using Nginx

Containerize the frontend using the official Nginx image so it serves your HTML, CSS and JavaScript files.

Create a Dockerfile

Inside the frontend folder create a file named

Dockerfile

Add the following

FROM nginx:latest

COPY . /usr/share/nginx/html

EXPOSE 80

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Frontend%20dockerfile.png?raw=true)

---

Create the Frontend Folder structure

Build the Image

Navigate to the frontend folder

cd frontend

Build the image

docker build -t student-frontend .

Verify the Image

docker images

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Frontend%20build.png?raw=true)

---

Run the Container

docker run -d -p 8080:80 --name student-frontend-container student-frontend

Verify the Container

docker ps

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/frontend%20container.png?raw=true)

---

Test the Frontend

Open

http://localhost:8080

Click Load Students.

Since the backend is running on port 3000 the frontend should fetch data from and display the student records.

http://localhost:3000/students

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/frontend%2080%20UI.png?raw=true)

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/frontend%2080%20UI%20students.png?raw=true)

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Frontend%20students%20.png?raw=true)

---

Check Logs

docker logs student-frontend-container

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Frontend%20container%20logs%20.png?raw=true)

---

Stop and Remove the Container

docker stop student-frontend-container

docker rm student-frontend-container

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Frontend%20container%20stop.png?raw=true)


---

Docker Compose

Instead of running three separate docker run commands we'll start the entire application with one command.

This is how applications are commonly run in development and testing environments.

Right now you have

Container 1 → Frontend

Container 2 → Backend

Container 3 → MySQL

We start them separately.

Create a .env File

In the project root (student-management/) create

.env

Add

MYSQL_ROOT_PASSWORD=root123
MYSQL_DATABASE=studentdb
MYSQL_USER=root
MYSQL_PASSWORD=root123

PORT=3000

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/.env.png?raw=true)

---

Update backend/db.js

Change the connection settings to use environment variables

const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
});

connection.connect((err) => {
    if (err) {
        console.error("Database connection failed:", err);
    } else {
        console.log("Connected to MySQL");
    }
});

module.exports = connection;

No more; host: "localhost"

or

host: "host.docker.internal"

Docker Compose will provide

DB_HOST=db

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/db.js%20compose.png?raw=true)

---

Create docker-compose.yml

In the project root

version: "3.9"

services:

  db:
    image: mysql:8.0
    container_name: mysql-container

    restart: always

    environment:
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
      MYSQL_DATABASE: ${MYSQL_DATABASE}

    ports:
      - "3306:3306"

    volumes:
      - mysql-data:/var/lib/mysql

  app:
    build: ./backend

    container_name: student-backend

    depends_on:
      - db

    ports:
      - "3000:3000"

    environment:
      DB_HOST: db
      DB_USER: root
      DB_PASSWORD: root123
      DB_NAME: studentdb

  web:
    build: ./frontend

    container_name: student-frontend

    depends_on:
      - app

    ports:
      - "80:80"

volumes:

  mysql-data:

  ![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/docker-compose.yml.png?raw=true)

  ![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/docker%20ps%20compose%20.png?raw=true)

  ---

Stop Previous Containers

If any containers are still running

docker ps

Stop them

docker stop student-backend-container

docker stop student-frontend-container

docker stop mysql-container

Remove them

docker rm student-backend-container

docker rm student-frontend-container

docker rm mysql-container

---

Start Everything

From the project root

docker compose up -d


Docker Compose will:

Build the backend image

Build the frontend image

Pull the MySQL image (if needed)

Create a network

Create the volume

Start all three containers

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/docker%20compose%20up%20.png?raw=true)

---

Verify

Run:

docker compose ps

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/docker%20complete%20.png?raw=true)


---

Test the Application

Open

http://localhost

We should see:

Student Management System

Click

Load Students

The frontend should call

Backend

The backend should call

MySQL

Students should appear in the table.

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Complete%20system%20.png?raw=true)

![image alt](https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Complete%20records%20system%20.png?raw=true)



  
