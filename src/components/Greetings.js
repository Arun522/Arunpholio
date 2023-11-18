import React, { useEffect, useRef } from "react";
import "./Greetings.css";
import landingPerson from "../assets/lottie/landingPerson.json";
import lottie from "lottie-web";
import jSLogo from "../assets/images/javascript.svg";
import { Button } from "antd";

import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Greeting() {
  const animationContainer = useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: animationContainer.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: landingPerson,
    });
  }, []);

  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1 className="greeting-text">
              {" "}
              {"Hi! I'm Arun "}
              <span className="wave-emoji">{"👋"}</span>
            </h1>

            <p className="greeting-text-p subtitle">
              A passionate Web Developer 🚀 having experience of building Web
              Applications with
              <img
                style={{ width: "40px", height: "40px" }}
                title="Javascript"
                alt="Javascript"
                src={jSLogo}
              />{" "}
              and some other cool libraries and frameworks.
            </p>
            
            <div className="button-greeting-div">
              <Button
                type="primary"
                shape="round"
                style={{ fontFamily: "Mynor-Regular" }}
                onClick={() =>
                  openProjectInNewWindow(
                    "https://drive.google.com/file/d/1_TQUBmchpNV00WA1KW74BfYdNPnTrmzR/view?usp=drive_link"
                  )
                }
              >
                See my Resume
              </Button>
              <a
                href={"https://www.linkedin.com/in/arun1999/"}
                className="icon-button linkedin"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </i>
              </a>
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <div ref={animationContainer} />
        </div>
      </div>
    </div>
  );
}
