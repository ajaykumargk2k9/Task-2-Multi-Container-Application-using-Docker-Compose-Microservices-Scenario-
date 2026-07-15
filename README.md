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








