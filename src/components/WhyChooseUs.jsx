import "./WhyChooseUs.css";
import {
  FaUserMd,
  FaStethoscope,
  FaHeart,
  FaRupeeSign,
} from "react-icons/fa";

function WhyChooseUs() {
  return (
    <section className="why-choose">
      <h2>Why Choose Krishna Health Care</h2>
      <p className="why-subtitle">
        Trusted orthopaedic care with a patient-first approach
      </p>

      <div className="why-grid">

        <div className="why-card">
          <div className="why-icon">
            <FaUserMd />
          </div>
          <h3>Experienced Doctor</h3>
          <p>15+ years of experience in orthopaedic treatment.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <FaStethoscope />
          </div>
          <h3>Modern Treatment</h3>
          <p>Advanced techniques and updated medical practices.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <FaHeart />
          </div>
          <h3>Patient-Centered Care</h3>
          <p>Personalized care focused on patient comfort.</p>
        </div>

        <div className="why-card">
          <div className="why-icon">
            <FaRupeeSign />
          </div>
          <h3>Affordable & Trusted</h3>
          <p>Quality treatment at reasonable costs.</p>
        </div>

      </div>
    </section>
  );
}

export default WhyChooseUs;
