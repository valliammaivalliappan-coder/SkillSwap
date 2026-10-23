
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Components/Home";
import AddStudent from "./Components/AddStudent";
import DisplayStudent from "./Components/DisplayStudent";
import EditStudent from "./Components/EditStudent";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/" className="brand">
          <span className="brand-icon">✦</span>
          <span className="brand-name">
            <strong>SkillSwap</strong>
            <small>Campus</small>
          </span>
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/AddStudent">Register</Link>
          <Link to="/Students">Students</Link>
        </div>

        <Link to="/AddStudent" className="nav-button">
          Get Started
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        <Route path="/Students" element={<DisplayStudent />} />
        <Route path="/EditStudent/:id" element={<EditStudent />} />
      </Routes>

      <footer className="footer">
        SkillSwap Campus | Share Skills. Learn Together.
      </footer>
    </BrowserRouter>
  );
}

export default App;
