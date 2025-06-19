import React from "react";

function Contact() {
  return (
    <div className="container">
      <h1 className="title">Contact Us</h1>
      <p className="description">
        If you have any questions, feel free to reach out!
      </p>
      <form className="form">
        <label>Name:</label>
        <input  placeholder="Your Name" className="input" />
        <label>Email:</label>
        <input  placeholder="Your Email" className="input" />
        <label>Message:</label>
        <textarea placeholder="Your Message" className="textarea"></textarea>
        <button className="button">Send</button>
      </form>
    </div>
  );
}

export default Contact;
