const express = require("express");
const router = express.Router();

let students = [];

// GET all students
router.get("/students", (req, res) => {
  res.json(students);
});

// POST - Add student (FIXED)
router.post("/students", (req, res) => {
  const { name, department, year } = req.body;

  if (!name || !department || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newStudent = {
    id: Date.now(), // ✅ AUTO ID
    name,
    department,
    year,
  };

  students.push(newStudent);
  res.status(201).json(newStudent);
});

// PUT - Update student
router.put("/students/:id", (req, res) => {
  const id = Number(req.params.id);

  students = students.map((std) =>
    std.id === id ? { ...std, ...req.body } : std
  );

  res.json({ message: "Student Updated Successfully", students });
});

// DELETE - Delete student
router.delete("/students/:id", (req, res) => {
  const id = Number(req.params.id);
  students = students.filter((std) => std.id !== id);

  res.json({ message: "Student Deleted Successfully", students });
});

module.exports = router;
