import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id) => {
    setIsOpen(false);
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left" onClick={() => scrollToSection("home")}>
        <div className="logo-circle">K</div>
        <div className="clinic-text">
          <h3>Krishna Health Care</h3>
          <p>Orthopaedic Specialist</p>
        </div>
      </div>

      {/* TOGGLE BUTTON (MOBILE ONLY) */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        {isOpen ? "✖" : "☰"}
      </button>

      {/* MENU */}
      <ul className={`nav-links ${isOpen ? "show" : ""}`}>
        <li onClick={() => scrollToSection("home")}>Home</li>

        <li onClick={() => setIsOpen(false)}>
          <Link to="/about">About</Link>
        </li>

        <li onClick={() => setIsOpen(false)}>
          <Link to="/services">Services</Link>
        </li>

        <li>
          <button
            className="appointment-btn"
            onClick={() => scrollToSection("appointment")}
          >
            Book Appointment
          </button>
        </li>

        <li onClick={() => scrollToSection("contact")} className="contact-link">
          Contact
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
