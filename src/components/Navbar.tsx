import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  useEffect(() => {
    smoother = ScrollSmoother.create({ wrapper: "#smooth-wrapper", content: "#smooth-content", smooth: 1.7, speed: 1.7, effects: true, autoResize: true, ignoreMobileResize: true });
    smoother.scrollTop(0);
    smoother.paused(true);
    document.querySelectorAll(".header ul a").forEach((elem) => {
      elem.addEventListener("click", (event) => {
        if (window.innerWidth > 1024) {
          event.preventDefault();
          smoother.scrollTo((event.currentTarget as HTMLAnchorElement).getAttribute("data-href"), true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => ScrollSmoother.refresh(true));
  }, []);

  return <><div className="header">
    <a href="/#" className="navbar-title" data-cursor="disable"><img src="/logo.svg" alt="MS Logo" className="navbar-logo" /><span>MS</span></a>
    <ul>{[["ABOUT", "#about"], ["EXPERIENCE", "#experience"], ["WORK", "#work"], ["RESEARCH", "#research"], ["CONTACT", "#contact"]].map(([label, href]) => <li key={href}><a data-href={href} href={href}><HoverLinks text={label} /></a></li>)}</ul>
  </div><div className="landing-circle1"></div><div className="landing-circle2"></div><div className="nav-fade"></div></>;
};

export default Navbar;
