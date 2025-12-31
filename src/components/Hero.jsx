import "./Hero.css";
import doctorImg from "../assets/doctor.jpg"; // add your image here

function Hero() {
  return (
    <section className="hero" id="home">
      {/* LEFT CONTENT */}
      <div className="hero-left">
        <h1>Krishna Health Care</h1>

        <h3 className="subtitle">Orthopaedic Specialist</h3>

        <div className="experience">
          <span className="check">✔</span>
          <p>15+ Years of Experience</p>
        </div>

        <p className="tagline">
          Expert Orthopaedic Care You Can Trust
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">Book Appointment</button>
          <button className="secondary-btn">
            📞 Call Now
          </button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-right">
        <img src={doctorImg} alt="Doctor" />
      </div>
    </section>
  );
}

export default Hero;
