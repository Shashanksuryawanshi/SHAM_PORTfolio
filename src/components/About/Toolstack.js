import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiJupyter,
  SiGooglecolab,
  SiGithub,
  SiDocker,
  SiAnaconda,
} from "react-icons/si";
import { GiMicroscope, GiChemicalDrop } from "react-icons/gi";
import { FaFlask, FaVial, FaDatabase } from "react-icons/fa";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Development & Coding Tools */}
      <Col xs={4} md={2} className="tech-icons" title="VS Code">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Jupyter Notebook">
        <SiJupyter />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Google Colab">
        <SiGooglecolab />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="GitHub">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Anaconda">
        <SiAnaconda />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Docker">
        <SiDocker />
      </Col>

      {/* Laboratory & Analytical Tools */}
      <Col xs={4} md={2} className="tech-icons" title="Microscope">
        <GiMicroscope />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Chemical Analysis">
        <GiChemicalDrop />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Analytical Flask">
        <FaFlask />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Lab Testing">
        <FaVial />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Database / Bio Data Repositories">
        <FaDatabase />
      </Col>
    </Row>
  );
}

export default Toolstack;