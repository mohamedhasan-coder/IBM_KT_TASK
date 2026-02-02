# Student Management System (MERN Stack)  

A simple **Student Management System** built using the **MERN stack**.  
This project includes a **Node.js + Express REST API (Backend)** and a **React.js Frontend with Dashboard, Sidebar, and Navbar** to perform complete **CRUD operations** on student data.

Developed as part of **IBM Internship – Day 3 Knowledge Transfer (KT) Task**.

---
 
## Features 

### Backend (API)
- Add new students
- View all students
- Update student details
- Delete students  
- RESTful API
- Tested using Postman

### Frontend (React)
- Dashboard summary
- Add / Edit / Delete students
- Sidebar & Navbar layout
- Responsive UI
- Connected to backend API

---

## 🛠️ Technologies Used

### Backend
- Node.js
- Express.js
- JavaScript
- Postman
- CORS

### Frontend
- React.js (Vite)
- CSS
- Fetch API

---

## Project Structure

```text
IBM_KT_TASK/
│
├── Student_Management_System/
│   ├── Backend/
│   │   ├── server.js
│   │   ├── studentRoutes.js
│   │   ├── package.json
│   │   └── package-lock.json
│   │
│   ├── Frontend/
│   │   ├── public/
│   │   ├── src/
│   │   │   ├── components/
│   │   │   │   ├── Navbar.jsx
│   │   │   │   ├── Sidebar.jsx
│   │   │   │   ├── Dashboard.jsx
│   │   │   │   ├── StudentForm.jsx
│   │   │   │   └── StudentList.jsx
│   │   │   ├── App.jsx
│   │   │   ├── App.css
│   │   │   └── main.jsx
│   │   ├── index.html
│   │   ├── vite.config.js
│   │   └── package.json
│   │
│   ├── screenshots/
│   │   ├── get_students.png
│   │   ├── post_student.png
│   │   ├── put_student.png
│   │   └── delete_student.png
│   │
│   └── README.md
│
├── IBM_KT_Task_4/
└── KT_TASK_3.pdf
```

---

## ⚙️ Installation & Setup

### Prerequisites

Check Node.js and npm:
```bash
node -v
npm -v
```

---

### Backend Setup

```bash
cd Student_Management_System/Backend
npm install
node server.js
```

**Expected Output:**
```
Student Server running on port 5000
```

---

### Frontend Setup

```bash
cd Student_Management_System/Frontend
npm install
npm run dev
```

Frontend runs at:
```
http://localhost:5173
```

---

## API Base URL

```text
http://localhost:5000/api
```

---

## API Endpoints

---

### GET – Fetch All Students

```text
GET /api/students
```

**Description:**
- Fetches all student records
- Returns an array of students
- If no students → returns `[]`

Screenshot:  
`screenshots/get_students.png`

---

### POST – Add New Student

```text
POST /api/students
```

**Request Body (JSON):**
```json
{
  "name": "Student Name",
  "department": "CSE",
  "year": 3
}
```

Screenshot:  
`screenshots/post_student.png`

---

### PUT – Update Student

```text
PUT /api/students/:id
```

**Request Body (JSON):**
```json
{
  "year": 4
}
```

Screenshot:  
`screenshots/put_student.png`

---

### DELETE – Delete Student

```text
DELETE /api/students/:id
```

**Description:**
- Deletes student using ID
- Removes record permanently

Screenshot:  
`screenshots/delete_student.png`

---

## Frontend Dashboard

The dashboard displays:
- Total students count
- Departments count
- Student management table
- Add / Edit / Delete functionality

All data is fetched dynamically from the backend API.

---

## Learning Outcomes

- REST API development using Express.js
- CRUD operations
- React state management
- Component-based UI design
- CORS handling
- MERN project structuring

---

## GitHub Repository

🔗 Repository Link:  
https://github.com/mohamedhasan-coder/IBM_KT_TASK.git

---

## Conclusion

This project successfully demonstrates a **full MERN stack Student Management System** with complete CRUD functionality, dashboard UI, and backend integration.  
It is suitable for **IBM Internship evaluation, KT submission, and beginner-to-intermediate interviews**.
