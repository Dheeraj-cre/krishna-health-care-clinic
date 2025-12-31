import { useState } from "react";
import "./AppointmentForm.css";

function AppointmentForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.date
    ) {
      alert("Please fill all required fields");
      return;
    }

    console.log("Appointment Data:", formData);

    // Future API call here
    setSubmitted(true);
    setFormData({
      name: "",
      phone: "",
      email: "",
      date: "",
      message: "",
    });
  }

  return (
    <section className="appointment" id="appointment">
      <h2>Book an Appointment</h2>
      <p className="appointment-subtitle">
        Schedule your visit with our orthopaedic specialist
      </p>

      {submitted && (
        <p className="success-msg">
          ✅ Appointment request submitted successfully!
        </p>
      )}

      <form className="appointment-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Full Name *"
          value={formData.name}
          onChange={handleChange}
        />

        <input
          type="tel"
          name="phone"
          placeholder="Phone Number *"
          value={formData.phone}
          onChange={handleChange}
        />

        <input
          type="email"
          name="email"
          placeholder="Email Address *"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Describe your health issue (optional)"
          value={formData.message}
          onChange={handleChange}
        />

        <button type="submit">Submit Appointment</button>
      </form>
    </section>
  );
}

export default AppointmentForm;
