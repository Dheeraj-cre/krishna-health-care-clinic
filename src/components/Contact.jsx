import "./Contact.css";

function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contact Us</h2>

      <p className="contact-subtitle">
        Get in touch with Krishna Health Care for expert orthopaedic treatment
      </p>

      <div className="contact-container">

        {/* LEFT INFO */}
        <div className="contact-info">
          <h3>Krishna Health Care</h3>

          <p>
            📍 Address: Near Natiniya Mai, Sector -B, Vishwanath Puri Colony, Lalpur, Uttar Pradesh 221002
          </p>

          <p>
            📞 Phone:{" "}
            <a href="tel:+918707589581">+91 8707589581</a>
          </p>

          <p>
            ✉️ Email:{" "}
            <a href="mailto:info@krishnahealthcare.com">
              info@krishnahealthcare.com
            </a>
          </p>

          {/* View on Maps Button */}
          <a
            href="https://maps.app.goo.gl/iAUuGe9yq1Gu2Tuy9"
            target="_blank"
            rel="noopener noreferrer"
            className="map-btn"
          >
            View on Google Maps
          </a>
        </div>

        {/* RIGHT MAP */}
        <div className="contact-map">
          <iframe
            title="Krishna Health Care Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3605.015199277569!2d82.96960697516951!3d25.370807077599615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x398e2c38ad24e0f3%3A0x44c37320964b9d8e!2sKrishna%20Healthcare%20And%20Therapy%20Center!5e0!3m2!1sen!2sin!4v1771827236887!5m2!1sen!2sin"
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: "16px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

      </div>
    </section>
  );
}

export default Contact;
