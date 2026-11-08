import React, { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    setSubmitted(true);

    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <div className="contact-page">
      <div className="contact-header">
        <span className="section-label">GET IN TOUCH</span>
        <h1>Contact Us</h1>
        <p>Have a question or need help? We'd love to hear from you.</p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Let's Talk!</h2>

          <p>
            Whether you have questions about an event or need assistance, our
            team is here to help.
          </p>

          <div className="contact-item">
            <h3>Email</h3>
            <p>support@eventify.com</p>
          </div>

          <div className="contact-item">
            <h3>Location</h3>
            <p>Tripoli, Lebanon</p>
          </div>

          <div className="contact-item">
            <h3>Working Hours</h3>
            <p>Monday - Friday</p>
            <p>9:00 AM - 5:00 PM</p>
          </div>
        </div>

        <div className="contact-form-container">
          <h2>Send Us a Message</h2>

          <form onSubmit={handleSubmit}>
            <label>Your Name</label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

            <label>Email Address</label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <label>Your Message</label>

            <textarea
              placeholder="Write your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />

            <button type="submit">Send Message →</button>
          </form>

          {submitted && (
            <p className="contact-success">
              Thank you! Your message has been submitted successfully.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Contact;
