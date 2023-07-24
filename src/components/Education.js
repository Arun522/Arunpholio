import React from "react";
import "./Education.css";
//import { Fade } from "react-reveal";
import { Timeline } from "antd";
import bamu from "../assets/images/university.png";
import saint from "./school1.png";
//import sk from "../assets/images/school2.png";

export default function Education() {
  return (
    <div id="education">
      
        <div className="education-container">
          <div>
            <h1 className="education-heading">Education📚</h1>
            <div className="education-cards-div">
              <Timeline mode={"alternate"}>
                <Timeline.Item label="2017 - 2021">
                  <div className="container">
                    <div className="content">
                      <img
                        src={bamu}
                        alt={"school_logo"}
                        className={"education-roundedimg"}
                      />
                      <h2>ST. JOSEPH'S INSTITUTE OF TECHNOLOGY</h2>
                      <h3>B.E in Computer Science Engineering</h3>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item label="2015 - 2017">
                  <div className="container">
                    <div className="content">
                      <img
                        src={saint}
                        alt={"school_logo"}
                        className={"education-roundedimg"}
                      />
                      <h2>ALPHA WISDOM VIDYASHARAM</h2>
                      <h3>HSC(Computer Science)</h3>
                    </div>
                  </div>
                </Timeline.Item>
                <Timeline.Item label="2013">
                  <div className="container">
                    <div className="content">
                      <img
                        src={saint}
                        alt={"school_logo"}
                        className={"education-roundedimg"}
                      />
                      <h2>ALPHA WISDOM VIDYASHARAM</h2>
                      <h3>SSC</h3>
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
