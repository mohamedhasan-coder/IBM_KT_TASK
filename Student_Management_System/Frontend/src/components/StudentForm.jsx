import { useEffect, useState } from "react";

function StudentForm({ fetchStudents, editStudent, setEditStudent }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [year, setYear] = useState("");

  // Load data when edit button clicked
  useEffect(() => {
    if (editStudent) {
      setName(editStudent.name);
      setDepartment(editStudent.department);
      setYear(editStudent.year);
    }
  }, [editStudent]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // EDIT MODE
    if (editStudent) {
      await fetch(`http://localhost:5000/api/students/${editStudent.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          department,
          year: Number(year),
        }),
      });

      setEditStudent(null);
    }
    // ADD MODE
    else {
      await fetch("http://localhost:5000/api/students", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          department,
          year: Number(year),
        }),
      });
    }

    setName("");
    setDepartment("");
    setYear("");
    fetchStudents();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h3>{editStudent ? "Edit Student" : "Add Student"}</h3>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />

      <input
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        placeholder="Department"
        required
      />

      <input
        type="number"
        value={year}
        onChange={(e) => setYear(e.target.value)}
        placeholder="Year"
        required
      />

      <button type="submit">
        {editStudent ? "Update" : "Add"}
      </button>
    </form>
  );
}

export default StudentForm;
