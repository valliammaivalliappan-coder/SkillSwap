
import { Link } from "react-router-dom";

function Home() {
  const skills = [
    {
      icon: "☕",
      name: "Java Programming",
      description: "Learn Core Java",
      category: "Programming",
      color: "blue"
    },
    {
      icon: "🎨",
      name: "UI/UX Design",
      description: "Design better apps",
      category: "Design",
      color: "pink"
    },
    {
      icon: "🌐",
      name: "Web Development",
      description: "Build your first website",
      category: "Development",
      color: "green"
    },
    {
      icon: "🎤",
      name: "Public Speaking",
      description: "Improve communication",
      category: "Communication",
      color: "orange"
    }
  ];

  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <span className="eyebrow">WELCOME TO SKILLSWAP CAMPUS</span>

          <h1>
            Share your skills.
            <span> Discover new ones.</span>
          </h1>

          <p>
            Connect with students, exchange knowledge, and
            learn something new every day.
          </p>

          <div className="hero-buttons">
            <Link to="/AddStudent" className="primary-button">
              Register Now →
            </Link>

            <Link to="/Students" className="secondary-button">
              Explore Students
            </Link>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Learn</strong>
              <small>Something new</small>
            </div>
            <div>
              <strong>Teach</strong>
              <small>What you know</small>
            </div>
            <div>
              <strong>Connect</strong>
              <small>With students</small>
            </div>
          </div>
        </div>

        <div className="hero-art">
          <div className="art-circle circle-one"></div>
          <div className="art-circle circle-two"></div>

          <div className="art-symbol symbol-one">&lt;/&gt;</div>
          <div className="art-symbol symbol-two">✎</div>

          <div className="student-illustration">
            <div className="student-emoji">👩🏻‍💻</div>
            <div className="student-emoji">👨🏻‍💻</div>
          </div>

          <div className="laptop-art">💻</div>

          <div className="art-caption">
            <strong>Skills grow when shared!</strong>
            <span>Learn together. Grow together.</span>
          </div>
        </div>
      </section>

      <section className="popular-section">
        <div className="section-heading">
          <div>
            <span className="eyebrow">DISCOVER AND LEARN</span>
            <h2>Popular Skills</h2>
          </div>

          <Link to="/Students" className="view-all">
            Explore students →
          </Link>
        </div>

        <div className="skill-grid">
          {skills.map((skill) => (
            <div className="skill-card" key={skill.name}>
              <div className={`skill-icon ${skill.color}`}>
                {skill.icon}
              </div>

              <h3>{skill.name}</h3>
              <p>{skill.description}</p>

              <span className={`skill-tag ${skill.color}`}>
                {skill.category}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section className="join-section">
        <div>
          <h2>Your skills can help someone!</h2>
          <p>
            Join the campus community and start exchanging knowledge.
          </p>
        </div>

        <Link to="/AddStudent" className="primary-button">
          Join SkillSwap →
        </Link>
      </section>
    </div>
  );
}

export default Home;
