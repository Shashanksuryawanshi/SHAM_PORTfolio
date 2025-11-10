import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HeartDisease from "../../Assets/Projects/Heart.png";
import TrafficLight from "../../Assets/Projects/trafficlight.png";
import QCInternship from "../../Assets/Projects/qc.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects & Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the academic and research projects I’ve worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          {/* Heart Disease Prediction */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HeartDisease}
              isBlog={false}
              title="Heart Disease Prediction"
              description="Developed a machine learning model to predict the likelihood of heart disease using patient clinical data. Implemented algorithms like Logistic Regression, Random Forest, and KNN using Python & Scikit-learn. Evaluated model performance through precision, recall, F1-score, and ROC-AUC metrics, and built a simple UI for real-time predictions."
              ghLink="https://github.com/Shashanksuryawanshi/Heart-Disease-predictor.git"
              demoLink="https://shambhavi-heart-disease-app.netlify.app/"
            />
          </Col>

          {/* Automated Washroom Traffic Light Control System */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={TrafficLight}
              isBlog={false}
              title="Automated Washroom Light Traffic Control System"
              description="Designed an automated traffic light system using the 8051 microcontroller. Programmed in assembly language to perform arithmetic, logical, and control operations for accurate signal transitions. Integrated timers and interrupts for real-time control and implemented LED interface to simulate real-world traffic flow."
              ghLink="https://github.com/shambhavikumari/TrafficControl8051"
              demoLink="https://traffic8051.netlify.app/"
            />
          </Col>

          {/* QC Microbiology Internship */}
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={QCInternship}
              isBlog={false}
              title="QC Microbiology Internship – Centrient Pharmaceuticals"
              description="Performed environmental monitoring, sterility testing, and microbial culture inoculations. Operated autoclaves and Laminar Air Flow (LAF) benches under aseptic conditions. Conducted water and product testing following GMP and biosafety protocols, and maintained SOP logbooks for media, reagents, and QC activities."
              ghLink=""
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;