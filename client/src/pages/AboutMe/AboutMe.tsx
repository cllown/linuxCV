import SplitLayout from "../../components/layouts/SplitLayout";
import mePhoto from "../../assets/me.png";
import "./AboutMe.css";

const AboutMe = () => (
  <div className="about-me-container">
    <SplitLayout
      left={
        <div className="about-photo">
          <img src={mePhoto} alt="Artur" className="about-photo__img" />
        </div>
      }
      right={
        <div className="about-info">
          <span className="about-info__greeting">Hi, I`m Artur,</span>
          <h2 className="about-info__title">
            <span className="gradient-text">
              A Full-Stack <br />
              Developer
            </span>
          </h2>
          <p className="about-info__bio">
            With expertise spanning frontend and backend technologies, I create
            seamless experiences from concept to deployment.
          </p>
        </div>
      }
    />
  </div>
);

export default AboutMe;
