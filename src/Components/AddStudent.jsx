
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addStudent } from "../services/StudentService";

function AddStudent() {
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
      alert("Enter your phone number or disable phone sharing");
      return;
    }

    try {
      await addStudent(student);
      alert("Registration successful!");
      navigate("/Students");
    } catch (error) {
      alert("Registration failed. Check whether JSON Server is running.");
      console.error(error);
    }
  };

  return (
    <div className="registration-page">
      <div className="registration-heading">
        <div className="heading-icon">♙</div>

        <div>
          <span className="eyebrow">JOIN OUR COMMUNITY</span>
          <h1>Register as a Student</h1>
          <p>
            Fill in your details to join SkillSwap and start
            exchanging skills with other students.
          </p>
        </div>
      </div>

      <form className="student-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-group">
            <label>Student Name *</label>
            <input
              type="text"
              name="sname"
              value={student.sname}
              onChange={handleChange}
              placeholder="Enter your full name"
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
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="form-group">
            <label>Student ID *</label>
            <input
              type="text"
              name="sid"
              value={student.sid}
              onChange={handleChange}
              placeholder="Enter student ID"
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
              type="text"
              name="teachSkill"
              value={student.teachSkill}
              onChange={handleChange}
              placeholder="e.g. Java, UI Design"
              required
            />
          </div>

          <div className="form-group">
            <label>Skill I Want to Learn *</label>
            <input
              type="text"
              name="learnSkill"
              value={student.learnSkill}
              onChange={handleChange}
              placeholder="e.g. React, Python"
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
              placeholder="Enter phone number"
            />
          </div>

          <div className="form-group full-width">
            <label>About Me (Optional)</label>
            <textarea
              name="bio"
              value={student.bio}
              onChange={handleChange}
              placeholder="Tell other students about yourself"
              rows="3"
            />
          </div>

          <div className="form-group full-width checkbox-group">
            <input
              type="checkbox"
              id="sharePhone"
              name="sharePhone"
              checked={student.sharePhone}
              onChange={handleChange}
            />

            <label htmlFor="sharePhone">
              I agree to share my phone number with other students.
            </label>
          </div>
        </div>

        <button type="submit" className="submit-button">
          ♙ Register Student
        </button>
      </form>

      <div className="benefits-row">
        <span>♧ Learn New Skills</span>
        <span>♙ Build Connections</span>
        <span>↗ Grow Together</span>
      </div>
    </div>
  );
}

export default AddStudent;
