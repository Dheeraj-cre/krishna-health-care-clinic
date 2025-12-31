import "./ServicesPreview.css";
import {
  FaStethoscope,
  FaRunning,
  FaBandAid,
  FaHeartbeat,
  FaPills,
} from "react-icons/fa";

function ServicesPreview() {
  return (
    <section className="services-preview">
      <h2>Our Services</h2>
      <p className="services-subtitle">
        Comprehensive orthopaedic care for every stage of life
      </p>

      <div className="services-grid">

        <div className="service-card">
          <div className="service-icon">
            <FaStethoscope size={22} />
          </div>
          <h3>Orthopaedic Consultation</h3>
          <p>Expert diagnosis and personalized treatment plans.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaRunning size={22} />
          </div>
          <h3>Physiotherapy & Therapy</h3>
          <p>Advanced therapy for pain relief and mobility.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaBandAid size={22} />
          </div>
          <h3>Fracture & Injury Care</h3>
          <p>Complete fracture management and recovery care.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaHeartbeat size={22} />
          </div>
          <h3>Joint Pain Treatment</h3>
          <p>Relief from arthritis and joint-related problems.</p>
        </div>

        <div className="service-card">
          <div className="service-icon">
            <FaPills size={22} />
          </div>
          <h3>Medicine & Rehabilitation</h3>
          <p>Comprehensive rehabilitation and medication care.</p>
        </div>

      </div>
    </section>
  );
}

export default ServicesPreview;
