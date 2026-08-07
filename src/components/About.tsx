import "./styles/About.css";

import { education, personalInfo } from "../data/portfolio";



const About = () => {

  return (

    <div className="about-section" id="about">

      <div className="about-me">

        <h3 className="title">About Me</h3>

        <p className="para">

          I am {personalInfo.name}, a Final Year {education[0].degree} student at{" "}
          {education[0].institute}. I am a fullstack developer specializing in
          scalable systems with Spring Boot & MERN stack, and conduct ML research

          in computer vision, adversarial AI, and social network analysis.

          Currently open to SDE, Full Stack, and Backend roles for campus

          placements.

        </p>

        <div className="about-details">

          <div className="about-detail-item">

            <span className="about-label">Education</span>

            <span>

              {education[0].degree} · {education[0].institute}
            </span>

          </div>

          <div className="about-detail-item">

            <span className="about-label">Experience</span>

            <span>Fullstack Developer Intern @ Kiwisoft Solutions</span>

          </div>

          <div className="about-detail-item">

            <span className="about-label">Research</span>

            <span>4 Papers in Deep Learning, Computer Vision & WSN</span>

          </div>

          <div className="about-detail-item">

            <span className="about-label">Open to</span>

            <span>SDE - Full Stack Roles</span>

          </div>

        </div>

      </div>

    </div>

  );

};



export default About;

