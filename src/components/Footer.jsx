import "./Footer.css";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* BRAND */}
        <div className="footer-brand">
          <div className="footer-logo">K</div>
          <h3>Krishna Health Care</h3>
          <p className="footer-subtitle">Orthopaedic Specialist</p>
          <p className="footer-desc">
            Providing expert orthopaedic care with modern treatment
            methods and a patient-centered approach.
          </p>

          {/* SOCIAL ICONS */}
          <div className="footer-socials">
            <a href="#" aria-label="Facebook">
              <FaFacebookF />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram />
            </a>
            <a href="#" aria-label="YouTube">
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-links">
          <h4>Quick Links</h4>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/services">Services</a>
        </div>

        {/* CONTACT */}
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p><FaPhoneAlt /> +91 123 456 7890</p>
          <p><FaEnvelope /> info@krishnahealthcare.com</p>
          <p><FaMapMarkerAlt /> 123 Medical Plaza, Healthcare District, City - 123456</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 Krishna Health Care. Made with ❤️ for better healthcare.
      </div>
    </footer>
  );
}

export default Footer;
