import "./About.css";
import doctorImg from "../assets/doctor.jpg";
import {
  FaUserMd,
  FaGraduationCap,
  FaAward,
  FaUsers,
  FaHeart,
  FaShieldAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      {/* ABOUT INTRO */}
      <section className="about-page">
        <div className="about-container">
          <div className="about-image">
            <img src={doctorImg} alt="Orthopaedic Doctor" />
          </div>

          <div className="about-content">
            <h1>About the Doctor</h1>
            <h3><FaUserMd /> Orthopaedic Specialist</h3>

            <p>
              At <strong>Krishna Health Care</strong>, we are committed to
              providing expert orthopaedic care with compassion and precision.
              With over <strong>15+ years of experience</strong>, we specialize
              in treating bone, joint, and muscle-related conditions.
            </p>

            <p>
              Our mission is to help patients regain mobility, reduce pain, and
              improve their quality of life using modern medical techniques.
            </p>
          </div>
        </div>
      </section>

      {/* QUALIFICATIONS */}
      <section className="qualifications">
        <div className="qualifications-header">
          <div className="qualifications-icon">
            <FaGraduationCap />
          </div>
          <h2>Qualifications & Certifications</h2>
          <p>Highly qualified with extensive training and certification</p>
        </div>

        <div className="qualifications-box">
          <div className="qualification-item">
            <span className="q-number">1</span>
            <p>MBBS – Bachelor of Medicine & Bachelor of Surgery</p>
          </div>
          <div className="qualification-item">
            <span className="q-number">2</span>
            <p>MS Orthopaedics – Master of Surgery in Orthopaedics</p>
          </div>
          <div className="qualification-item">
            <span className="q-number">3</span>
            <p>Fellowship in Joint Replacement Surgery</p>
          </div>
          <div className="qualification-item">
            <span className="q-number">4</span>
            <p>Advanced Training in Sports Medicine</p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE STATS */}
      <section className="experience-stats">
        <div className="stats-grid">
          <div className="stat-card">
            <FaAward className="stat-icon" />
            <h3>15+ Years Experience</h3>
            <p>Dedicated to excellent orthopaedic care</p>
          </div>

          <div className="stat-card">
            <FaUsers className="stat-icon" />
            <h3>10,000+ Patients Treated</h3>
            <p>Successfully treated diverse conditions</p>
          </div>

          <div className="stat-card">
            <FaHeart className="stat-icon" />
            <h3>98% Success Rate</h3>
            <p>High patient satisfaction</p>
          </div>

          <div className="stat-card">
            <FaShieldAlt className="stat-icon" />
            <h3>Certified Specialist</h3>
            <p>Board-certified orthopaedic surgeon</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <h2>Experience Expert Orthopaedic Care</h2>
        <p>
          Schedule your consultation today and take the first step towards
          better musculoskeletal health
        </p>
        <button className="cta-btn">Book an Appointment</button>
      </section>
     <Footer />
     
    </>
  );
}

export default About;
