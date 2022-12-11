import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import memory from "../../Assets/Projects/memory.png";
import smmmsl from "../../Assets/Projects/smmmsl.png";
import tesla from "../../Assets/Projects/tesla.png";
import uber from "../../Assets/Projects/uber.png";
import clubhouse from "../../Assets/Projects/clubhouse.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={smmmsl}
              isBlog={false}
              title="smmmsl.ro"
              description="Build with react.js, Material-UI, and Bootstrap."
              // ghLink="https://github.com/soumyajit4419/Chatify"
              demoLink="https://www.smmmsl.ro"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clubhouse}
              isBlog={false}
              title="ClubHouse App"
              description="ClubHouse App Clone build with React.js and deployed with Netlify."
              ghLink="https://github.com/Bex24/clubhouse-clone"
              demoLink="https://sharp-swanson-60ba3c.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={uber}
              isBlog={false}
              title="Uber Clone"
              description="Uber Clone build with Next.js, tailwind.css and MapBox api."
              ghLink="https://github.com/Bex24/uber-next-clone"
              demoLink="https://uber-next-clone-seven.vercel.app/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tesla}
              isBlog={false}
              title="Tesla Clone" 
              description="Tesla Clone build with React.js and styled-components."
              ghLink="https://github.com/Bex24/tesla-clone"
              demoLink="https://elegant-shannon-898907.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={memory}
              isBlog={false}
              title="Memory Game"
              description="Simple Memory Game using React.js"
              ghLink="https://github.com/Bex24/memory-game"
              demoLink="https://optimistic-wescoff-696240.netlify.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
