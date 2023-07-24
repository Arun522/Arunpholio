import { Image } from "antd";
import React from "react";
import "./Certification.css";
//import { Fade } from "react-reveal";
import certificate from "../assets/images/Crio-certificate1.jpeg";

export default function Certification() {
  return (
    
      <div className="main" id="certifications">
        <div>
          <h1 className="skills-heading"> Certification🏆</h1>
          <div className="certification-container">
            <Image
              //   width={'auto'}
              //   height={'auto'}
              src={certificate}
            />
          </div>
        </div>
      </div>
    
  );
}
