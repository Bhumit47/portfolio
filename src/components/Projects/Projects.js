import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import swiggy from "../../Assets/Projects/swiggy.png"
import breaking_bad from "../../Assets/Projects/breaking-bad.png"
import blog_master from "../../Assets/Projects/blog_master.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={breaking_bad}
              isBlog={false}
              title="Breaking-Info"
              description="This is a REACT-based website dedicated to fans of the famous show 'Breaking-Bad' starring Bryan Cranston along with Aaron Paul. React hooks are used along with context API.  "
              link="https://github.com/Bhumit47/Breaking-Bad-infoM.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blog_master}
              isBlog={false}
              title="Blog-Master"
              description="My personal blog page build with Node.JS and Express which takes the content from markdown files and renders it using Express. The project comprises of all basic CRUD operations and cloud DataBase system(MONGOOSE)."
              link="https://github.com/Bhumit47/Blog-Master.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={swiggy}
              isBlog={false}
              title="Swiggy Landing page"
              description="This is a landing-page clone of famous food delivery app 'Swiggy' built using REACT framework along with basic HTML and CSS."
              link="https://github.com/edyst/swiggy-landing-page-reactjs-Bhumit47.git"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
