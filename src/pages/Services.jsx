import "./Services.css";
import {
  FaPills,
  FaChartLine,
  FaHeart,
  FaUsers,
  FaStethoscope,
  FaBolt,
  FaShieldAlt,
  FaHandsHelping,
  FaBullseye,
} from "react-icons/fa";
import Footer from "../components/Footer";

function Services() {
  return (
    <>
      {/* ================= SERVICES DETAIL ================= */}
      <section className="services-detailed">
        <h1>Our Services</h1>
        <p className="services-intro">
          Comprehensive orthopaedic care services tailored to meet your unique health needs.
          From consultation to rehabilitation, we're here to support your journey to better
          musculoskeletal health.
        </p>

        <div className="services-detailed-grid">

          <div className="service-detail-card">
            <div className="service-icon"><FaPills /></div>
            <h3>Medicine & Rehabilitation</h3>
            <p>Complete medication management and rehabilitation support.</p>
            <ul>
              <li>Prescription management</li>
              <li>Nutritional guidance</li>
              <li>Home exercise programs</li>
              <li>Long-term care planning</li>
            </ul>
            <button>Book Appointment</button>
          </div>

          <div className="service-detail-card">
            <div className="service-icon"><FaChartLine /></div>
            <h3>Preventive Care</h3>
            <p>Proactive approaches to maintain musculoskeletal health.</p>
            <ul>
              <li>Bone health screening</li>
              <li>Posture assessment</li>
              <li>Injury prevention</li>
              <li>Wellness consultations</li>
            </ul>
            <button>Book Appointment</button>
          </div>

          <div className="service-detail-card">
            <div className="service-icon"><FaHeart /></div>
            <h3>Fracture & Injury Treatment</h3>
            <p>Expert care for fractures, sprains, and sports injuries.</p>
            <ul>
              <li>Emergency fracture care</li>
              <li>Cast & splint application</li>
              <li>Minimally invasive surgery</li>
              <li>Sports injury management</li>
            </ul>
            <button>Book Appointment</button>
          </div>

          <div className="service-detail-card">
            <div className="service-icon"><FaUsers /></div>
            <h3>Joint Pain & Arthritis Care</h3>
            <p>Advanced treatment for chronic joint pain and arthritis.</p>
            <ul>
              <li>Arthritis diagnosis</li>
              <li>Joint preservation</li>
              <li>Pain relief strategies</li>
              <li>Injection therapy</li>
            </ul>
            <button>Book Appointment</button>
          </div>

          <div className="service-detail-card">
            <div className="service-icon"><FaStethoscope /></div>
            <h3>Orthopaedic Consultation</h3>
            <p>Comprehensive evaluation and diagnosis.</p>
            <ul>
              <li>Medical history review</li>
              <li>Physical examination</li>
              <li>Diagnostic imaging</li>
              <li>Treatment planning</li>
            </ul>
            <button>Book Appointment</button>
          </div>

          <div className="service-detail-card">
            <div className="service-icon"><FaBolt /></div>
            <h3>Physiotherapy / Therapy</h3>
            <p>Personalized rehabilitation programs.</p>
            <ul>
              <li>Post-surgical rehab</li>
              <li>Sports injury recovery</li>
              <li>Pain management</li>
              <li>Mobility restoration</li>
            </ul>
            <button>Book Appointment</button>
          </div>

        </div>
      </section>

      {/* ================= MISSION & VALUES ================= */}
      <section className="mission-values">
        <div className="mission-header">
          <h2>Our Mission & Values</h2>
          <p>
            At Krishna Health Care, our mission is to provide world-class
            orthopaedic care through compassion, advanced techniques,
            and commitment to excellence.
          </p>
        </div>

        <div className="mission-grid">
          <div className="mission-card">
            <div className="mission-icon"><FaHeart /></div>
            <h3>Patient-Centered Care</h3>
            <p>Individual-focused care with dignity and comfort.</p>
          </div>

          <div className="mission-card">
            <div className="mission-icon"><FaShieldAlt /></div>
            <h3>Excellence in Treatment</h3>
            <p>Evidence-based practices and modern techniques.</p>
          </div>

          <div className="mission-card">
            <div className="mission-icon"><FaHandsHelping /></div>
            <h3>Compassionate Approach</h3>
            <p>Empathy and emotional support throughout healing.</p>
          </div>

          <div className="mission-card">
            <div className="mission-icon"><FaBullseye /></div>
            <h3>Holistic Healthcare</h3>
            <p>Comprehensive long-term wellness focus.</p>
          </div>
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="services-cta">
        <h2>Ready to Take the First Step?</h2>
        <p>Schedule your consultation with our orthopaedic specialist today</p>

        <div className="cta-buttons">
          <button className="cta-primary">Book Appointment</button>
          <a href="tel:+911234567890" className="cta-secondary">Call Us Now</a>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Services;
