# SimpleWebApp-CI-CD

A lightweight web-based Notepad application built using **HTML, CSS, and JavaScript**, containerized using **Docker** for easy deployment and CI/CD integration.

---

## 📌 Project Overview

This project demonstrates:

* Frontend web development using HTML, CSS, and JavaScript
* Docker containerization
* Git version control
* CI/CD pipeline readiness

The application allows users to write and edit notes directly in their browser through a clean and responsive interface.

---

## 📂 Project Structure

```text
SimpleWebApp-CI-CD/
├── Dockerfile
├── index.html
├── script.js
└── style.css
```

---

## 🚀 Features

* Simple and responsive UI
* Browser-based note editing
* Clean CSS styling
* Lightweight application
* Dockerized deployment

---

## 🛠️ Technologies Used

| Technology | Purpose                |
| ---------- | ---------------------- |
| HTML5      | Structure              |
| CSS3       | Styling                |
| JavaScript | Functionality          |
| Docker     | Containerization       |
| Git        | Version Control        |
| GitHub     | Source Code Management |

---

## 🐳 Docker Deployment

### Build Docker Image

Navigate to the project directory:

```bash
cd SimpleWebApp-CI-CD
```

Build the image:

```bash
docker build -t simple-notepad-app .
```

---

### Run Docker Container

```bash
docker run -d -p 8080:80 --name notepad-app simple-notepad-app
```

---

### Access Application

Open your browser and visit:

```text
http://localhost:8080
```

---

## 📸 Application Workflow

```text
User
 │
 ▼
Browser
 │
 ▼
HTML + CSS + JavaScript
 │
 ▼
Docker Container
 │
 ▼
Web Application
```

---

## 🔧 Git Workflow Used

```bash
git add <file>
git commit -m "commit message"
git push origin main
```

---

## 🎯 Learning Objectives

* Understand frontend web application development
* Learn Docker image creation and container execution
* Practice Git version control workflows
* Prepare applications for CI/CD automation

---

## Future Enhancements

* Local Storage Support
* Dark Mode
* Download Notes as Text File
* Multiple Notes Management
* CI/CD Integration using Jenkins
* Kubernetes Deployment

---

## Author

**Harshal Dhande**

GitHub Repository: My_Projects
