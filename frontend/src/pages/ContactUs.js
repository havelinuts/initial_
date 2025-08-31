import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./ContactUs.css";

const ContactUs = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    emailjs.send(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      {
        from_name: form.name,
        from_email: form.email,
        message: form.message
      },
      "YOUR_PUBLIC_KEY"
    )
    .then(
      () => setSubmitted(true),
      () => setError("Failed to send. Please try again.")
    );
  };

  return (
    <div className="contactus-page">
      <h2>Contact Us</h2>
      <form className="contactus-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Message:
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            rows={4}
            required
          />
        </label>
        <button type="submit">Send Message</button>
      </form>
      {submitted && (
        <div className="confirmation">
          <h4>Thank you! Your message has been sent.</h4>
        </div>
      )}
      {error && (
        <div className="error">
          <h4>{error}</h4>
        </div>
      )}
    </div>
  );
};

export default ContactUs;