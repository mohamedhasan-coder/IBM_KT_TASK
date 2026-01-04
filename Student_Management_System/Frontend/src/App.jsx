import { useEffect, useState, useCallback } from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import "./App.css";

function App() {
  const [students, setStudents] = useState([]);
  const [editStudent, setEditStudent] = useState(null);

  const fetchStudents = useCallback(async () => {
    const res = await fetch("http://localhost:5000/api/students");
    const data = await res.json();
    setStudents(data);
  }, []);

  useEffect(() => {
    fetchStudents();
  }, [fetchStudents]);

  return (
    <>
      <Navbar />
      <div className="layout">
        <Sidebar />
        <div className="content">
          <Dashboard students={students} />

          <StudentForm
            fetchStudents={fetchStudents}
            editStudent={editStudent}
            setEditStudent={setEditStudent}
          />

          <StudentList
            students={students}
            setEditStudent={setEditStudent}
            fetchStudents={fetchStudents}
          />
        </div>
      </div>
    </>
  );
}

export default App;
