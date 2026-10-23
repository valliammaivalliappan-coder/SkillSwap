
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getStudentsById,
  updateStudent
} from "../services/StudentService";

function EditStudent() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [student, setStudent] = useState({
    sname: "",
    sid: "",
    semail: "",
    dept: "",
    year: "",
    teachSkill: "",
    learnSkill: "",
    phNo: "",
    sharePhone: false,
    bio: ""
  });

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await getStudentsById(id);

        setStudent({
          sname: "",
          sid: "",
          semail: "",
          dept: "",
          year: "",
          teachSkill: "",
          learnSkill: "",
          phNo: "",
          sharePhone: false,
          bio: "",
          ...response.data
        });
      } catch (error) {
        console.error(error);
        alert("Unable to find this student.");
        navigate("/Students");
      }
    };

    fetchStudent();
  }, [id, navigate]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setStudent({
      ...student,
      [name]: type === "checkbox" ? checked : value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !student.sname.trim() ||
      !student.sid.trim() ||
      !student.semail.trim() ||
      !student.dept ||
      !student.year ||
      !student.teachSkill.trim() ||
      !student.learnSkill.trim()
    ) {
      alert("Please fill all required fields");
      return;
    }

    if (student.sharePhone && !student.phNo.trim()) {
      alert("Enter a phone number or disable phone sharing");
      return;
    }

    try {
      await updateStudent(id, student);
      alert("Student updated successfully!");
      navigate("/Students");
    } catch (error) {
      alert("Unable to update student.");
      console.error(error);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-heading">
        <div className="heading-icon">✎</div>

        <div>
          <span className="eyebrow">UPDATE YOUR INFORMATION</span>
          <h1>Edit Student Details</h1>
          <p>Update your skills and student information.</p>
        </div>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Student Name *</label>
            <input
              name="sname"
              value={student.sname}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email Address *</label>
            <input
              type="email"
              name="semail"
              value={student.semail}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Student ID *</label>
            <input
              name="sid"
              value={student.sid}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Department *</label>
            <select
              name="dept"
              value={student.dept}
              onChange={handleChange}
              required
            >
              <option value="">Select department</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Electronics and Communication</option>
              <option>Mechanical Engineering</option>
              <option>Commerce</option>
              <option>Other</option>
            </select>
          </div>

          <div className="form-group">
            <label>Year of Study *</label>
            <select
              name="year"
              value={student.year}
              onChange={handleChange}
              required
            >
              <option value="">Select year</option>
              <option value="Year 1">Year 1</option>
              <option value="Year 2">Year 2</option>
              <option value="Year 3">Year 3</option>
              <option value="Year 4">Year 4</option>
            </select>
          </div>

          <div className="form-group">
            <label>Skill I Can Teach *</label>
            <input
              name="teachSkill"
              value={student.teachSkill}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Skill I Want to Learn *</label>
            <input
              name="learnSkill"
              value={student.learnSkill}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone Number (Optional)</label>
            <input
              type="tel"
              name="phNo"
              value={student.phNo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group full-width">
            <label>About Me</label>
            <textarea
              name="bio"
              value={student.bio}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="form-group full-width checkbox-group">
            <input
              type="checkbox"
              id="editSharePhone"
              name="sharePhone"
              checked={Boolean(student.sharePhone)}
              onChange={handleChange}
            />

            <label htmlFor="editSharePhone">
              Allow other students to see my phone number
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          Save Changes
        </button>

        <button
          type="button"
          className="cancel-button"
          onClick={() => navigate("/Students")}
        >
          Cancel
        </button>
      </form>
    </div>
  );
}

export default EditStudent;
