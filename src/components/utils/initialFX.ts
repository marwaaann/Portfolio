import { smoother } from "../Navbar";

// Keep the loading experience, but avoid GSAP's introductory text transforms.
// Those transforms can leave the page permanently transparent in some browsers.
export function initialFX() {
  document.body.style.overflowY = "auto";
  smoother?.paused(false);
  document.getElementsByTagName("main")[0]?.classList.add("main-active");
}
