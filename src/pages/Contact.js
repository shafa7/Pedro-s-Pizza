import React, { useState } from "react";
import PizzaLeft from "../assets/pizzaLeft.jpg";
import "../styles/Contact.css";

function Contact() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setShowPopup(true);

    // Hide popup automatically after 2 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 2000);

    // Reset form fields
    e.target.reset();
  };

  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${PizzaLeft})` }}
      ></div>

      <div className="rightSide">
        <h1>Contact Us</h1>
        <form id="contact-form" onSubmit={handleSubmit}>
          <label htmlFor="name">Full Name</label>
          <input name="name" placeholder="Enter full name..." type="text" required />

          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Enter email..." type="email" required />

          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Enter message..."
            name="message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>

        {/* ✅ Centered Popup */}
        {showPopup && (
          <div className="popupOverlay">
            <div className="popupBox">
              <h3>✅ Thank you for contacting us!</h3>
              <p>We’ll get back to you soon.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Contact;
