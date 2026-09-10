import { PropsWithChildren } from "react";

import "./styles/Landing.css";



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

        {children}

      </div>

    </>

  );

};



export default Landing;

