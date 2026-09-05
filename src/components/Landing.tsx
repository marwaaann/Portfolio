import { PropsWithChildren } from "react";

import "./styles/Landing.css";

import { personalInfo } from "../data/portfolio";



const Landing = ({ children }: PropsWithChildren) => {

  return (

    <>

      <div className="landing-section" id="landingDiv">

        <div className="landing-container">

          <div className="landing-intro">
            <p className="landing-kicker">SOFTWARE ENGINEER - BUILDER - RESEARCHER</p>
            <h2>Hello, I'm</h2>
            <h1>
              MARWAN
              <br />
              <span>SHAFI</span>
            </h1>
            <p className="landing-summary">
              I build secure backend systems, polished React products, and practical machine-learning tools.
            </p>
            <div className="landing-actions">
              <a className="landing-action landing-action-primary" href="#work">View projects <span>GO</span></a>
              <a className="landing-action" href={`mailto:${personalInfo.email}`}>Let's talk <span>GO</span></a>
            </div>
          </div>

          <div className="landing-info">

            <h3>Fullstack</h3>

            <h2 className="landing-info-h2">

              <div className="landing-h2-1">DEVELOPER</div>

            </h2>

            <h2>
              <div className="landing-h2-info-1">DEVELOPER</div>
            </h2>

          </div>

        </div>

        <div className="landing-proof" aria-label="Technical highlights">
          <div><strong>20+</strong><span>secure REST APIs</span></div>
          <div><strong>12+</strong><span>database entities designed</span></div>
          <div><strong>700+</strong><span>DSA problems solved</span></div>
          <div><strong>92 FPS</strong><span>real-time CV inference</span></div>
        </div>
        {children}

      </div>

    </>

  );

};



export default Landing;

