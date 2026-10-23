
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getStudents,
  deleteStudent
} from "../services/StudentService";
import StudentCard from "./StudentCard";

function DisplayStudent() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const response = await getStudents();
      setStudents(response.data);
    } catch (error) {
      console.error("Error fetching students:", error);
      alert("Unable to load students. Check JSON Server.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this student?"
    );

    if (confirmDelete) {
      try {
        await deleteStudent(id);

        setStudents(
          students.filter((student) => student.id !== id)
        );
      } catch (error) {
        alert("Unable to delete student.");
        console.error(error);
      }
    }
  };

  const filteredStudents = students.filter((student) => {
    const searchText = search.toLowerCase();

    return (
      student.sname?.toLowerCase().includes(searchText) ||
      student.dept?.toLowerCase().includes(searchText) ||
      student.teachSkill?.toLowerCase().includes(searchText) ||
      student.learnSkill?.toLowerCase().includes(searchText)
    );
  });

  return (
    <div className="students-page">
      <div className="students-heading">
        <div>
          <span className="eyebrow">OUR CAMPUS COMMUNITY</span>
          <h1>Explore Students</h1>
          <p>
            Find students who can teach you something new
            and share the skills you already have.
          </p>
        </div>

        <button
          type="button"
          className="primary-button"
          onClick={() => navigate("/AddStudent")}
        >
          + Register Student
        </button>
      </div>

      <div className="search-box">
        <span>⌕</span>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by name, department or skill..."
        />
      </div>

      <div className="results-heading">
        <h2>Student Community</h2>
        <span>{filteredStudents.length} students</span>
      </div>

      {loading ? (
        <p className="empty-message">Loading students...</p>
      ) : filteredStudents.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">♧</div>
          <h3>No students found</h3>
          <p>Register a student or try another search.</p>

          <button
            type="button"
            className="primary-button"
            onClick={() => navigate("/AddStudent")}
          >
            Register Now
          </button>
        </div>
      ) : (
        <div className="student-grid">
          {filteredStudents.map((student) => (
            <StudentCard
              key={student.id}
              student={student}
              onEdit={(id) => navigate(`/EditStudent/${id}`)}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default DisplayStudent;
