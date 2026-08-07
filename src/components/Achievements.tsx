import "./styles/Achievements.css";
import { achievements, education, skills } from "../data/portfolio";

const Achievements = () => {
  return (
    <div className="achievements-section section-container" id="achievements">
      <div className="achievements-container">
        <h2>
          Achievements <span>&</span> Skills
        </h2>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div className="achievement-card" key={index}>
              <span className="achievement-icon">{item.icon}</span>
              <div>
                <h4>{item.title}</h4>
                <p>{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="education-box">
          <h3>Education</h3>
          {education.map((item) => (
            <div className="education-detail" key={item.degree}>
              <div>
                <h4>{item.degree}</h4>
                {item.institute && <p>{item.institute}</p>}
              </div>
              {item.duration && (
                <div className="education-meta">
                  <span>{item.duration}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => (
            <div className="skills-category" key={category}>
              <h4>{category.charAt(0).toUpperCase() + category.slice(1)}</h4>
              <div className="skills-tags">
                {items.map((skill) => (
                  <span className="skill-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Achievements;
