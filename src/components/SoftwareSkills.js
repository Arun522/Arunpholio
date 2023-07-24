import React from "react";
import "./SoftwareSkills.css";

export default function SoftwareSkill() {
  const softwareSkills = [
    {
      skillName: "JavaScript",
      fontAwesomeClassname: require("../assets/images/javascript.svg"),
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: require("../assets/images/react.svg"),
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: require("../assets/images/nodejs.svg"),
    },
    {
      skillName: "mongoDB",
      fontAwesomeClassname: require("../assets/images/mongodb.svg"),
    },
    {
      skillName: "expressjs",
      fontAwesomeClassname: require("../assets/images/expressjs.svg"),
    },
    {
      skillName: "java",
      fontAwesomeClassname: require("../assets/images/java-icon.svg"),
    },
    {
      skillName: "typescript",
      fontAwesomeClassname: require("../assets/images/typescript.svg"),
    },

    {
      skillName: "html-5",
      fontAwesomeClassname: require("../assets/images/html-5.svg"),
    },
    {
      skillName: "css3",
      fontAwesomeClassname: require("../assets/images/css.svg"),
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: require("../assets/images/bootstrap.svg"),
    },
    {
      skillName: "jQuery",
      fontAwesomeClassname: require("../assets/images/jquery.svg"),
    },
    {
      skillName: "json",
      fontAwesomeClassname: require("../assets/images/json.svg"),
    },
    {
      skillName: "netlify",
      fontAwesomeClassname: require("../assets/images/netlify.svg"),
    },
    {
      skillName: "linux",
      fontAwesomeClassname: require("../assets/images/linux.svg"),
    },
    {
      skillName: "git",
      fontAwesomeClassname: require("../assets/images/github.svg"),
    },
    {
      skillName: "developer tools",
      fontAwesomeClassname: require("../assets/images/chrome.svg"),
    },
    {
      skillName: "vsCode",
      fontAwesomeClassname: require("../assets/images/visualstudio.svg"),
    },
    {
      skillName: "aws",
      fontAwesomeClassname: require("../assets/images/aws.svg"),
    },
    // {
    //   skillName: "docker",
    //   fontAwesomeClassname: require("../assets/images/docker.svg"),
    // },
    // {
    //   skillName: "handlebarsjs",
    //   fontAwesomeClassname: require("../assets/images/handlebarsjs.svg"),
    // },
  ];
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {" "}
          {softwareSkills.map((skills, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skills.skillName}
              >
                <img
                  className={"img-skill"}
                  alt={skills.skillName}
                  src={skills.fontAwesomeClassname.default}
                />{" "}
                <p> {skills.skillName} </p>{" "}
              </li>
            );
          })}{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
}
