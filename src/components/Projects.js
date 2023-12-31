import { Card, Image } from "antd";
import React from "react";
import "./Projects.css";
//import { Fade } from "react-reveal";
import crio from "../assets/images/crio.svg";
import git from "../assets/images/github.svg";
import link from "../assets/images/link.svg";


const { Meta } = Card;
const projects = [
  {
    image: require("../assets/images/portfolio.png"),
    projectName: "Arunfolio",
    projectDesc: "A react.js developer portfolio",
    footerLink: [
      {
        name: "View Project",
        url: "https://64bec9e5311bbd0e2fcc3e62--quiet-empanada-27c656.netlify.app",
      },
      {
        name: "View Code",
        url: "https://github.com/Arun522/Arunpholio",
      },
      //  you can add extra buttons here.
    ],
  },

  {
    image: require("../assets/images/arun-eats.png"),
    projectName: "Arun Eats",
    projectDesc: "Food Ordering website",
    footerLink: [
      {
        name: "View Project",
        url: "https://food-0rdering-website.netlify.app/",
      },
      {
        name: "View Code",
        url:
          "https://github.com/Arun522/Food-ordering-website",
      },
    ],
  },

  {
    image: require("../assets/images/plant.png"),
    projectName: "PLANT.",
    projectDesc: "Interior Design Website",
    footerLink: [
      {
        name: "View Project",
        url: "https://plant-interior-design.netlify.app/",
      },
      {
        name: "View Code",
        url:
          "https://github.com/Arun522/Plant-interior-design-page",
      },
    ],
  },

  {
    image: require("../assets/images/data-fin.png"),
    projectName: "REACT.",
    projectDesc: "Data Analytics Landing page",
    footerLink: [
      {
        name: "View Project",
        url: "https://datafin-landingpage.netlify.app/",
      },
      {
        name: "View Code",
        url:
          "https://github.com/Arun522/Data-Finance-LandingPage",
      },
    ],
  },
  {
    image: require("../assets/images/nexcent.png"),
    projectName: "Nexcent",
    projectDesc: "Agency Website",
    footerLink: [
      {
        name: "View Project",
        url: "https://agency-website-temp.netlify.app/",
      },
      {
        name: "View Code",
        url:
          "https://github.com/Arun522/Agency-website",
      },
    ],
  },

   {
    image: require("../assets/images/xflix.png"),
    projectName: "XFlix",
    projectDesc: "A MERN stack video sharing platform",
    footerLink: [
      {
        name: "View Project",
        url: "https://xflix-mern.netlify.app/",
      },
      {
        name: "View Code",
        url: "https://github.com/Arun522/mailarun522-ME_BUILDOUT_XFLIX_NODE",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/mailarun522/",
      },
      //  you can add extra buttons here.
    ],
  },
  
  {
    image: require("../assets/images/QTrip-dynamic.png"),
    projectName: "QTrip Dynamic",
    projectDesc: "An activity-planning website for travellers",
    footerLink: [
      {
        name: "View Project",
        url: "https://649acb06295e6105bd8cf935--arunkumarvelu-qtrip.netlify.app/",
      },
      {
        name: "View Code",
        url: "https://github.com/Arun522/mailarun522-ME_QTRIPDYNAMIC",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/mailarun522/ME_QTRIPDYNAMIC/",
      },
    ],
  },

  {
    image: require("../assets/images/covid-191.png"),
    projectName: "Covid-19 Tracker",
    projectDesc: "MERN stack covid tracker platform",
    footerLink: [
      {
        name: "View Project",
        url: "https://lnkd.in/gGaMBtj",
      },
      {
        name: "View Code",
        url: "https://github.com/Arun522/Covid19Tracker#covid-19-tracker",
      },
    ],
  },
  
  {
    image: require("../assets/images/QKart.png"),
    projectName: "QKart",
    projectDesc: "A MERN stack E-commerce Application",
    footerLink: [
      {
        name: "View Project",
        url: "https://qkart-mern.netlify.app/",
      },
      {
        name: "View Code",
        url: "https://github.com/Arun522/mailarun522-ME_QKART_FRONTEND_V2",
      },
      {
        name: "View Implementation",
        url: "https://www.crio.do/portfolio/mailarun522/ME_QKART_FRONTEND_V2/",
      },
    ],
  },
  
];

export default function Projects() {
  function openProjectInNewWindow(url) {
    var win = window.open(url, "_blank");
    win.focus();
  }
  function getLogoFromType(name){
    if(name === "View Project") return link
    else if(name === "View Code") return git
    else return crio
  }
  function getActions(p){
    let arrayToReturn = [];
    p.footerLink.forEach(x=>{
        arrayToReturn.push(<img
          src={getLogoFromType(x.name)}
          className={"image-link"}
          alt={x.name}
          title={x.name}
          onClick={() =>
            openProjectInNewWindow(x.url)
          }
          />)
    });
    return arrayToReturn
  }

  return (
    <div className="main" id="projects">
      <div>
        <h1 className="skills-heading">{"Personal Projects🚀"}</h1>
        <p className={"subTitle project-subtitle"}>
          {"Some of the projects, I worked on"}
        </p>
        <div className="projects-container">
          {projects.map((p, key) => {
            return (
              
                <Card
                  hoverable
                  style={{ width: "auto" }}
                  cover={
                    <Image
                      width={"auto"}
                      src={p.image}
                      alt={"project_image"}
                    />
                  }
                  key={key}
                  actions={getActions(p)}
                >
                  <Meta title={p.projectName} description={p.projectDesc} />
                </Card>
              
            );
          })}
        </div>
      </div>
    </div>
  );
}
