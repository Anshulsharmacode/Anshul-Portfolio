import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

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
              imgPath="/dualPowerSupply.jpg"
              isBlog={false}
              title="Dual Power Supply"
              description="Crafted a dual power supply that delivers reliable and stable voltages, crucial for powering sensitive electronics. This project involved problem-solving to ensure devices receive consistent energy, improving overall functionality."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/Audio-Amplifier.jpg"
              isBlog={false}
              title="Speaker Amplifier"
              description=" Created a speaker amplifier that enhances audio clarity and power, making music and voices sound rich and immersive. This hands-on project was driven by a passion for quality sound and meticulous attention to detail."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/stethoscope.jpg"
              isBlog={false}
              title="Electronic Stethoscope"
              description="Designed an electronic stethoscope that amplifies heart and lung sounds, offering doctors clearer insights during examinations. This project was inspired by the desire to contribute to better healthcare through innovative technology."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/lung.jpg"
              isBlog={false}
              title="Lung Cancer Classification"
              description="Applied machine learning to uncover hidden patterns in unlabeled lung cancer data, enabling earlier and more accurate diagnosis. This project reflects a commitment to advancing medical research and patient care"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="/brain.jpg"
              isBlog={false}
              title="Brain Tumor Classification"
              description="Developed a model to help doctors classify brain tumors more precisely using cutting-edge machine learning. This work was motivated by the potential to improve outcomes for patients through smarter technology."
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
