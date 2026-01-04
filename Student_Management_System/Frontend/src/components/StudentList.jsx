function StudentList({ students, setEditStudent, fetchStudents }) {
  const deleteStudent = async (id) => {
    await fetch(`http://localhost:5000/api/students/${id}`, {
      method: "DELETE",
    });
    fetchStudents();
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Department</th>
          <th>Year</th>
          <th>Actions</th>
        </tr>
      </thead>

      <tbody>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.department}</td>
            <td>{student.year}</td>
            <td>
              <button onClick={() => setEditStudent(student)}>
                Edit
              </button>
              <button
                className="delete"
                onClick={() => deleteStudent(student.id)}
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default StudentList;
