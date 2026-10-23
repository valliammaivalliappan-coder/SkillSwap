
function StudentCard({ student, onEdit, onDelete }) {
  const initials = (student.sname || "Student")
    .split(" ")
    .map((word) => word[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const handleProfile = () => {
    alert(
      `Name: ${student.sname}\n` +
      `Department: ${student.dept}\n` +
      `Year: ${student.year}\n` +
      `Teaches: ${student.teachSkill}\n` +
      `Wants to learn: ${student.learnSkill}\n` +
      `About: ${student.bio || "Not provided"}`
    );
  };

  return (
    <div className="student-card">
      <div className="student-card-top">
        <div className="student-avatar">{initials}</div>

        <div className="student-details">
          <h3>{student.sname}</h3>
          <p>♧ {student.dept}</p>
          <p>▣ {student.year}</p>
        </div>
      </div>

      <div className="student-skills">
        <span className="teach-tag">
          Teaches: {student.teachSkill}
        </span>

        <span className="learn-tag">
          Learns: {student.learnSkill}
        </span>
      </div>

      {student.bio && (
        <p className="student-bio">{student.bio}</p>
      )}

      <div className="student-card-actions">
        <button
          type="button"
          className="view-profile-button"
          onClick={handleProfile}
        >
          ♙ View Profile
        </button>

        <button
          type="button"
          className="edit-button"
          onClick={() => onEdit(student.id)}
          aria-label={`Edit ${student.sname}`}
          title="Edit student"
        >
          ✎
        </button>

        <button
          type="button"
          className="delete-button"
          onClick={() => onDelete(student.id)}
          aria-label={`Delete ${student.sname}`}
          title="Delete student"
        >
          🗑
        </button>
      </div>

      {student.sharePhone && student.phNo && (
        <a
          className="contact-link"
          href={`tel:${student.phNo}`}
        >
          ☎ Contact Student
        </a>
      )}
    </div>
  );
}

export default StudentCard;
