const express = require("express");
const router = express.Router();

let students = [];

// GET all students
router.get("/students", (req, res) => {
    res.json(students);
});

// POST - Add student
router.post("/students", (req, res) => {
    const student = req.body;

    if(!student || !student.id){
        return res.status(400).json({message: "Invalid data"});
    }

    students.push(student);
    res.json({ message: "Student Added Successfully", students });
});


// PUT - Update student
router.put("/students/:id", (req, res) => {
    const id = req.params.id;
    const updatedData = req.body;

    students = students.map(std =>
        std.id == id ? { ...std, ...updatedData } : std
    );

    res.json({ message: "Student Updated Successfully", students });
});

// DELETE - Delete student
router.delete("/students/:id", (req, res) => {
    const id = req.params.id;
    students = students.filter(std => std.id != id);

    res.json({ message: "Student Deleted Successfully", students });
});

module.exports = router;
