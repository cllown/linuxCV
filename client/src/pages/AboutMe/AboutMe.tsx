import SplitLayout from "../../components/layouts/SplitLayout";
import mePhoto from "../../assets/me.png";
import "./AboutMe.css";

const AboutMe = () => (
  <SplitLayout
    left={
      <div className="about-photo">
        <img src={mePhoto} alt="Artur" className="about-photo__img" />
      </div>
    }
    right={
      <div className="about-info">
        <h2 className="about-info__name">Artur</h2>
        <span className="about-info__role">Fullstack Developer</span>
        <p className="about-info__bio">
          Passionate about building creative user interfaces and crafting
          seamless digital experiences. I love turning complex problems into
          elegant, user-friendly solutions.
        </p>
        <div className="about-info__links">
          <a
            href="https://github.com/cllown"
            target="_blank"
            rel="noopener noreferrer"
            className="about-info__link"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="about-info__link"
          >
            LinkedIn
          </a>
        </div>
      </div>
    }
  />
);

export default AboutMe;
