import { useState } from "react";
import "./Contact.css";
import { LINKS } from "../../config/links";
import githubIcon from "../../shared/assets/icons/github.svg";
import linIcon from "../../shared/assets/icons/lin.svg";
import contactIcon from "../../shared/assets/icons/contact.svg";

import { API_BASE_URL } from "../../config/api";

const API_URL = `${API_BASE_URL}/api`;

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`${API_URL}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error("Form submission error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="contact">
      <div className="contact__links">
        <a
          href={LINKS.email}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link-icon"
        >
          <img src={contactIcon} alt="Email" />
        </a>
        <a
          href={LINKS.github}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link-icon"
        >
          <img src={githubIcon} alt="GitHub" />
        </a>
        <a
          href={LINKS.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="contact__link-icon"
        >
          <img src={linIcon} alt="LinkedIn" />
        </a>
      </div>
      <div className="contact__header">
        <h1 className="contact__title">Want to get in touch?</h1>
        <p className="contact__subtitle">Drop me a line</p>
      </div>
      <form className="contact__form" onSubmit={handleSubmit}>
        <div className="contact__row">
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
          </div>
          <div className="contact__field">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>
        <div className="contact__field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Enter your message"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          ></textarea>
        </div>
        <button type="submit" className="contact__submit" disabled={status === "sending"}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        {status === "success" && (
          <p className="contact__success">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="contact__error">Failed to send message. Try again.</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
