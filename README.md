# Student Management API

A simple **RESTful Student Management API** built using **Node.js** and **Express.js**.  
This API supports **CRUD operations** (Create, Read, Update, Delete) on student records and can be tested using **Postman**.

---

## Features
- Add new students
- View all students
- Update student details
- Delete students
- JSON-based API
- Beginner-friendly

---

## Technologies Used
- Node.js
- Express.js
- Postman

---

## Project Structure

StudentAPI
│── server.js
│── studentRoutes.js
│── package.json
│── package-lock.json
└── node_modules


---

## Installation & Setup

### 1. Install Node.js
Verify installation:
```bash
node -v
npm -v
```

### 2.  Install Dependencies

Run inside the project folder:

```
npm install
```

### 3. start the Server

```
node server.js
```

You Should See: 

```
Student Server running on port 5000
```


## API Endpoints Explanation

This API allows performing CRUD (Create, Read, Update, Delete) operations on student data using HTTP methods through Postman.

---

## 🌐 Base URL

```

http://localhost:5000/api

```


---

# 1.  GET – Fetch All Students

### Endpoint

GET /api/students


### Explanation
- Used to fetch all student records
- Returns an array of students
- If no students are added → returns `[]`

### Screenshot
![GET Students Screenshot](screenshots/get_students.png)

---

# 2. POST – Add New Student

### Endpoint

POST /api/students


### Explanation
- Adds a new student into the system
- Data must be sent in JSON format
- Stored in memory

### Request Body
```json
{
 "id": 1,
 "name": "Student Name",
 "department": "CSE",
 "year": 3
}
```
### Screen Shot
![POST Screenshot](screenshots/post_student.png)

# 3. PUT – Update Student

### Endpoint

PUT /api/students/:id

### Explanation
- Used to update student details

- ID is passed in URL

- Only changed fields need to be sent

### Request Body

{
 "year": 4
}


### Screen Shot
![PUT Screenshot](screenshots/put_student.png)

# 4. Delete – Delete Student

### Endpoint

DELETE /api/students/:id

### Explanation
- Deletes student using ID

- Removes record permanently from memory

### Screen Shot
![DELETE Screenshot](screenshots/delete_student.png)
