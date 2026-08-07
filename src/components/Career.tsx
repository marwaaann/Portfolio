import "./styles/Career.css";
import { experience } from "../data/portfolio";

const Career = () => {
  return (
    <div className="career-section section-container" id="experience">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          {experience.map((job, index) => (
            <div className="career-info-box" key={index}>
              <div className="career-info-in">
                <div className="career-role">
                  <h4>{job.role}</h4>
                  <h5>{job.company}</h5>
                  <span className="career-location">{job.location}</span>
                </div>
                <h3>{job.period}</h3>
              </div>
              <div className="career-details">
                <p>{job.description}</p>
                {"highlights" in job && job.highlights && (
                  <ul className="career-highlights">
                    {job.highlights.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                )}
                <span className="career-duration">{job.duration}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Career;
