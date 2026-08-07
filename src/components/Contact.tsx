import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { personalInfo } from "../data/portfolio";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${personalInfo.email}`} data-cursor="disable">
                {personalInfo.email}
              </a>
            </p>
            <p>
              <a href={`mailto:${personalInfo.collegeEmail}`} data-cursor="disable">
                {personalInfo.collegeEmail}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${personalInfo.phone}`} data-cursor="disable">
                {personalInfo.phone}
              </a>
            </p>
            <h4>Location</h4>
            <p data-cursor="disable">{personalInfo.location}</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a href={personalInfo.github} target="_blank" data-cursor="disable" className="contact-social">
              Github <MdArrowOutward />
            </a>
            <a href={personalInfo.linkedin} target="_blank" data-cursor="disable" className="contact-social">
              Linkedin <MdArrowOutward />
            </a>
            <a href={personalInfo.leetcode} target="_blank" data-cursor="disable" className="contact-social">
              LeetCode <MdArrowOutward />
            </a>
            <a href={personalInfo.codechef} target="_blank" data-cursor="disable" className="contact-social">
              CodeChef <MdArrowOutward />
            </a>
            <a href={personalInfo.codolio} target="_blank" data-cursor="disable" className="contact-social">
              Codolio <MdArrowOutward />
            </a>
            <a href={personalInfo.resumePath} target="_blank" data-cursor="disable" className="contact-social">
              Download Resume <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Designed and Developed <br /> by <span>Marwan Shafi</span>
            </h2>
            <h5>
              <MdCopyright /> {new Date().getFullYear()}
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
