import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);
  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="image_container">
          <img src="assets/man.png" alt="man"></img>
        </div>
      </div>
      <div className="right">
        <div className="wraper">
          <h3>HI,There,I,m</h3>
          <h1>Hossein Aflaki</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt=""></img>
        </a>
      </div>
    </div>
  );
}
