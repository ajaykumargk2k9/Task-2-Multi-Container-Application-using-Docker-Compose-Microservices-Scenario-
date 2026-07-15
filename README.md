🐳 Project: Multi-Container Application using Docker Compose (Microservices Scenario)

---

🎯 Objective
Deploy a multi-tier application using Docker Compose.

---

🧩 Scenario
You are building a 3-tier application:

---

Frontend (Nginx)
Backend (Node.js / Flask)
Database (MySQL)

---

📌 Requirement s
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

https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/package.json.png?raw=true

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

https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/app.json.png?raw=true

---

Start the backend with the command 

npm start

We should see: Server is running on port 3000

https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/npm%20start.png?raw=true

---

Test the API

Open your browser and visit:

Home page

Expected output: Student Management Backend is Running!

https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Test%20the%20API.png?raw=true

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

https://github.com/ajaykumargk2k9/Task-2-Multi-Container-Application-using-Docker-Compose-Microservices-Scenario-/blob/main/Students%20API.png?raw=true








