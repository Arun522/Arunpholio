import React, { useEffect, useRef } from "react";
import "./Skills.css";
import SoftwareSkills from "./SoftwareSkills";
import vueJS from "../assets/lottie/vueJS.json";
import lottie from "lottie-web";

export default function Skills() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: vueJS,
    });
  }, []);

  const skills = [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Creating application backend using Node and Express",
  ];

  return (
    <div className="main" id="skills">
      <div className="skills-main-div">
        <div className="skills-image-div">
          <div ref={animationContainer} />
        </div>

        <div className="skills-text-div">
          <h1 className="skills-heading">{"Technical Skills💻"}</h1>
          <p className="subTitle skills-text-subtitle">
            {"ASPIRING FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK"}
          </p>
          <SoftwareSkills />
          <div>
            {skills.map((skill, i) => (
              <p key={i} className="subTitle skills-text">
                {skill}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
