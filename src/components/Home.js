import React, { useState, useEffect } from "react";
import Greetings from "./Greetings";
import Skills from "./Skills";
import { BackTop } from "antd";
import "./Home.css";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Certification from "./Certification";
import { Spin, Layout, Menu } from "antd";
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  CoffeeOutlined,
  EditOutlined,
  PieChartOutlined,
  FileOutlined,
  HomeOutlined,
  CodeOutlined,
  HeartTwoTone,
  GoogleOutlined,
  GithubOutlined,
  LinkedinOutlined,
  LinkOutlined,
  LoadingOutlined,
  SafetyCertificateOutlined
} from "@ant-design/icons";

import "@fortawesome/fontawesome-free/css/all.min.css";


const { Header, Sider, Footer, Content } = Layout;

const Home = () => {
  const [collapsed, setCollapsed] = useState(true);
  const [loading, setLoading] = useState(true);

  const openProjectInNewWindow = (url) => {
    const win = window.open(url, "_blank");
    win.focus();
  };

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const handleScroll = (id) => {
    window.location.href = "#" + id;
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <Spin
      indicator={<LoadingOutlined style={{ fontSize: 60 }} spin />}
      size={"large"}
      spinning={loading}
      delay={500}
    >
      <Layout style={{ minHeight: "100vh" }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={collapsed}
          style={{
            height: "100vh",
            position: "sticky",
            top: 0,
          }}
        >
          <Menu theme="light" mode="inline" defaultSelectedKeys={["Home"]}>
            <Menu.Item key="Home" icon={<HomeOutlined />} onClick={() => handleScroll("")}>
              Home
            </Menu.Item>
            <Menu.Item
              key="#skills"
              icon={<CoffeeOutlined />}
              onClick={() => handleScroll("skills")}
            >
              Skills
            </Menu.Item>
            <Menu.Item
              key="Projects"
              icon={<CodeOutlined />}
              onClick={() => handleScroll("projects")}
            >
              Projects
            </Menu.Item>
            <Menu.Item
              key="Certifications"
              icon={<SafetyCertificateOutlined />}
              onClick={() => handleScroll("certifications")}
            >
              Certifications
            </Menu.Item>
            <Menu.Item
              key="Work Experience"
              icon={<PieChartOutlined />}
              onClick={() => handleScroll("experience")}
            >
              Work Experience
            </Menu.Item>
            <Menu.Item
              key="Education"
              icon={<EditOutlined />}
              onClick={() => handleScroll("education")}
            >
              Education
            </Menu.Item>
            <Menu.Item
              key="CRIO Verified Profile"
              icon={<LinkOutlined />}
              onClick={() =>
                openProjectInNewWindow("https://www.crio.do/portfolio/mailarun522/")
              }
            >
              CRIO Verified Profile
            </Menu.Item>
            <Menu.Item
              key="Resume"
              icon={<FileOutlined />}
              onClick={() =>
                openProjectInNewWindow("https://drive.google.com/drive/folders/1QRA7iI1q9FTT6KydX0-umge5r4BgMqCC")
              }
            >
              Resume
            </Menu.Item>
            <Menu.Item
              key="Linkedin"
              icon={<LinkedinOutlined />}
              onClick={() =>
                openProjectInNewWindow("https://www.linkedin.com/in/arun1999/")
              }
            >
              Linkedin
            </Menu.Item>
            <Menu.Item
              key="Github"
              icon={<GithubOutlined />}
              onClick={() =>
                openProjectInNewWindow("https://github.com/Arun522")
              }
            >
              Github
            </Menu.Item>
            <Menu.Item
              key="mailarun522@gmail.com"
              icon={<GoogleOutlined />}
              onClick={() =>
                openProjectInNewWindow("mailto:mailarun522@gmail.com")
              }
            >
              Send Mail
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ minHeight: "100vh" }}>
          <Header
            className="site-layout-background"
            style={{
              padding: 0,
              position: "sticky",
              top: 0,
              backgroundColor: "#EEF8F4",
              zIndex: 1,
            }}
          >
            {React.createElement(
              collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: "trigger",
                onClick: toggle,
                id: "toggleId",
              }
            )}
            <a href="/" className="logo">
              <span className="grey-color"> &lt;</span>
              <span className="logo-name">Arunkumar Velu</span>
              <span className="grey-color">/&gt;</span>
            </a>
          </Header>
          <Content
            className="site-layout-background"
            style={{ minHeight: "100vh" }}
          >
            <Greetings />
            <Skills />
            <Projects />
            <Certification />
            <Experience />
            <Education />
          </Content>
          <Footer style={{ textAlign: "center" }}>
            <span>
              <i className="fas fa-code"></i> with{" "}
              <HeartTwoTone twoToneColor="red" /> by
            </span>
            <a href="/">
              <span className="logo-name">Arunkumar velu</span>
            </a>
          </Footer>
          <BackTop>
            <div
              title="Go to top"
              style={{
                borderRadius: 4,
                backgroundColor: "#FE3D0C",
                color: "#fff",
                textAlign: "center",
                height: 40,
                width: 40,
                bottom: "20px",
                right: "30px",
                lineHeight: "40px",
                fontSize: "24px",
              }}
            >
              <i className="fas fa-hand-point-up">
                
              </i>
            </div>
          </BackTop>
        </Layout>
      </Layout>
    </Spin>
  );
};

export default Home;
