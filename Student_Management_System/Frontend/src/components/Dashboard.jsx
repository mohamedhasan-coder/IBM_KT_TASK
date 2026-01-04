const Dashboard = ({ students }) => {
  const totalStudents = students.length;
  const departments = new Set(students.map(s => s.department));

  return (
    <div className="dashboard">
      <div className="card">
        <h3>Total Students</h3>
        <p>{totalStudents}</p>
      </div>

      <div className="card">
        <h3>Departments</h3>
        <p>{departments.size}</p>
      </div>
    </div>
  );
};

export default Dashboard;
