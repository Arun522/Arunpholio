import React from "react";
import "./Experience.css";
//import { Fade } from "react-reveal";
import { Timeline } from "antd";
import briq from "../assets/images/vijayTech.png";
import tcsLogo from "../assets/images/tcs.jpg";

export default function Experience() {
  return (
    <div id="experience">
      
        <div className="experience-container">
          <div>
            <h1 className="experience-heading">Experience🖥️</h1>
            <div className="experience-cards-div">
              <Timeline mode={"alternate"}>
                <Timeline.Item label="July 2021 – April 2023">
                  <div className="container">
                    <div className="content">
                      <img
                        src={tcsLogo}
                        alt={"company_logo"}
                        className={"experience-roundedimg"}
                      />
                      <h2>Tata Consultancy Services</h2>
                      <h3>System Engineer</h3>
                      <p>
                        2+ years of experience working in System Engineer
                      </p>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item label="January 2021 – April 2021">
                  <div className="container">
                    <div className="content">
                      <img
                        src={briq}
                        alt={"company_logo"}
                        className={"experience-roundedimg"}
                      />
                      <h2>Vijay Tech Zone</h2>
                      <h3>Software Intern</h3>
                      <p>
                      3 months of experience working in frontend technologies
                      </p>
                    </div>
                  </div>
                </Timeline.Item>
              </Timeline>
            </div>
          </div>
        </div>
      
    </div>
  );
}
