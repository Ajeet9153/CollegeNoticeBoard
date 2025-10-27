// ContactUs.jsx
import React from "react";
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <p><strong>Email:</strong> <a href="mailto:info@cusat.ac.in">info@cusat.ac.in</a></p>
      <p><strong>Phone:</strong> <a href="tel:+914842575000">+91 484 257 5000</a></p>
      <p><strong>Address:</strong> Cochin University of Science and Technology, Kochi, Kerala, India</p>
    </div>
  );
};

export default ContactUs;