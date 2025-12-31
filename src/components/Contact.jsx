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
            📍 Address: Near Main Road, Varanasi, Uttar Pradesh
          </p>
          <p>
            📞 Phone:{" "}
            <a href="tel:+917985199359">+91 79851 99359</a>
          </p>
          <p>
            ✉️ Email:{" "}
            <a href="mailto:info@krishnahealthcare.com">
              info@krishnahealthcare.com
            </a>
          </p>
        </div>

        {/* RIGHT MAP */}
        <div className="contact-map">
          <iframe
  title="Krishna Health Care Location"
  src="https://www.google.com/maps?q=Varanasi&output=embed"
  width="100%"
  height="300"
  style={{ border: 0, borderRadius: "16px" }}
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

        </div>
      </div>
    </section>
  );
}

export default Contact;
