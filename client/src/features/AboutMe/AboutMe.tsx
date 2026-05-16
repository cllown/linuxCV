import { useWindowInfo } from "@/core/window/WindowInfoContext";
import mePhoto from "@/shared/assets/images/me.webp";
import "./AboutMe.css";

const AboutMe = () => {
  const { isMaximized } = useWindowInfo();

  return (
    <div className={`about-me${isMaximized ? " about-me--maximized" : ""}`}>
      <div className="about-me__photo">
        <img src={mePhoto} alt="Artur" className="about-me__photo-img" />
      </div>

      <div className="about-me__info">
        <span className="about-me__greeting">Hi, I&apos;m Artur,</span>
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

        {isMaximized && (
          <div className="about-me__bio--extended">
            <p>
              Results-oriented Full-Stack Developer with strong expertise in
              frontend architecture and building enterprise-grade CTRM
              (Commodity Trading and Risk Management) systems.
            </p>
            <p>
              Proficient in modernizing legacy applications and developing
              high-performance, data-intensive UIs using React 19, RxJS, and
              TypeScript.
            </p>
            <p>
              Demonstrated ability to translate complex business requirements
              into scalable technical solutions, establish robust testing
              environments (&gt;100 E2E/Unit tests), and optimize complex state
              management for financial and logistics operations.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AboutMe;
