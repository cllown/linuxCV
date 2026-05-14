import mePhoto from "../../assets/me.png";
import "./AboutMe.css";

const AboutMe = () => (
  <div className="about-me">
    <div className="about-me__photo">
      <img src={mePhoto} alt="Artur" className="about-me__photo-img" />
    </div>
    <div className="about-me__info">
      <span className="about-me__greeting">Hi, I'm Artur,</span>
      <h2 className="about-me__title">
        <span className="gradient-text">
          A Full-Stack <br />
          Developer
        </span>
      </h2>
      <p className="about-me__bio">
        With expertise spanning frontend and backend technologies, I create
        seamless experiences from concept to deployment.
      </p>
    </div>
  </div>
);

export default AboutMe;
