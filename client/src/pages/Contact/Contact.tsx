import "./Contact.css";

import githubIcon from "../../assets/github.svg";
import linIcon from "../../assets/lin.svg";
import contactIcon from "../../assets/contact.svg";

const Contact = () => {
  return (
    <div className="contact">
      <p className="contact__intro">
        Feel free to reach out — I'm always open to new opportunities and
        collaborations.
      </p>
      <div className="contact__links">
        <a href="mailto:your@email.com" className="contact__item">
          <img src={contactIcon} alt="Email" className="contact__icon" />
          <span>your@email.com</span>
        </a>
        <a
          href="https://github.com/cllown"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__item"
        >
          <img src={githubIcon} alt="GitHub" className="contact__icon" />
          <span>github.com/cllown</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact__item"
        >
          <img src={linIcon} alt="LinkedIn" className="contact__icon" />
          <span>LinkedIn</span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
