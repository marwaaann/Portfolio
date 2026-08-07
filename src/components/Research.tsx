import "./styles/Research.css";
import { researchPapers } from "../data/portfolio";
import { MdArrowOutward } from "react-icons/md";

const Research = () => {
  return (
    <div className="research-section section-container" id="research">
      <div className="research-container">
        <h2>
          Research <span>&</span> Publications
        </h2>
        <div className="research-grid">
          {researchPapers.map((paper, index) => (
            <div className="research-card" key={index}>
              <div className="research-card-header">
                <span className="research-type">{paper.type}</span>
                <span className="research-duration">{paper.duration}</span>
              </div>
              <h3>
                {paper.link ? (
                  <a href={paper.link} target="_blank" rel="noopener noreferrer">
                    {paper.title}
                  </a>
                ) : (
                  paper.title
                )}
              </h3>
              <p className="research-meta">
                Mentor: {paper.mentor} · Team of {paper.teamSize}
              </p>
              <p className="research-desc">{paper.description}</p>
              <div className="research-tags">
                {paper.skills.map((skill) => (
                  <span className="research-tag" key={skill}>
                    {skill}
                  </span>
                ))}
              </div>
              {paper.link && (
                <a
                  href={paper.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="research-link"
                  data-cursor="disable"
                >
                  View Project <MdArrowOutward />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Research;
