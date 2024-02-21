import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pixelNetwork from "../../Assets/Projects/pixel-network.png";
import carcar from "../../Assets/Projects/carcar.png";
import todo from "../../Assets/Projects/todo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          These are a few of my recent personal projects
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pixelNetwork}
              isBlog={false}
              title="Pixel Network"
              description="Pixel Network offers robust CRUD functionalities facilitating the management of accounts, games, issues, and comments, empowering small game developers to address challenges beyond their individual capacity."
              ghLink="https://gitlab.com/pixel-corps/pixel-corps"
              demoLink="https://pixel-corps-pixel-corps-adc4e34411b111f4d7cd8a62d1eed32f2a37744.gitlab.io/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carcar}
              isBlog={false}
              title="CarCar"
              description="CarCar can control a user's inventory of automobiles, while also providing the ability to manage automobile sales and servicing."
              ghLink="https://gitlab.com/hunterlang44/project-beta"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="To-do List"
              description="A daily planner for creating, managing and tracking projects and tasks."
              ghLink="https://gitlab.com/hunterlang44/project-alpha-apr"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
