import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects } from "../data/portfolio";

gsap.registerPlugin(useGSAP);

const Work = () => {
  useGSAP(() => {
    let translateX = 0;
    const setTranslateX = () => {
      const boxes = document.getElementsByClassName("work-box");
      if (!boxes.length) return;
      const rectLeft = document.querySelector(".work-container")!.getBoundingClientRect().left;
      const rect = boxes[0].getBoundingClientRect();
      const parentWidth = boxes[0].parentElement!.getBoundingClientRect().width;
      const padding = parseInt(window.getComputedStyle(boxes[0]).padding) / 2;
      translateX = rect.width * boxes.length - (rectLeft + parentWidth) + padding;
    };
    setTranslateX();
    const timeline = gsap.timeline({
      scrollTrigger: { trigger: ".work-section", start: "top top", end: `+=${Math.max(translateX, 0)}`, scrub: true, pin: translateX > 0, id: "work" },
    });
    if (translateX > 0) timeline.to(".work-flex", { x: -translateX, ease: "none" });
    return () => { timeline.kill(); ScrollTrigger.getById("work")?.kill(); };
  }, []);

  return <div className="work-section" id="work"><div className="work-container section-container">
    <h2>My <span>Work</span></h2>
    <div className="work-flex">{projects.map((project, index) => <div className="work-box" key={project.title}>
      <div className="work-info"><div className="work-title"><h3>{String(index + 1).padStart(2, "0")}</h3><div>
        <h4>{project.link ? <a href={project.link} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none" }}>{project.title}</a> : project.title}</h4>
        <p>{project.category}</p>{project.status === "in-progress" && <span className="work-status">In Progress</span>}
      </div></div><h4>Tools and features</h4><p>{project.tools}</p><p className="work-desc">{project.description}</p></div>
      <WorkImage image={project.image} alt={project.title} link={project.link || undefined} />
    </div>)}</div>
  </div></div>;
};

export default Work;
