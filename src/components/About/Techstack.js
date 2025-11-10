import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiPython,
  SiPandas,
  SiNumpy,
  SiScikitlearn,
  SiTensorflow,
  SiPowerbi,
  SiTableau,
  SiGit,
  SiDocker,
  SiJupyter,
} from "react-icons/si";
import { GiMicroscope, GiChemicalDrop } from "react-icons/gi";
import { FaDna, FaBacteria } from "react-icons/fa";
import { MdScience } from "react-icons/md";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Programming & Data Analysis */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow />
      </Col>

      {/* Bioinformatics & Computational Biology */}
      <Col xs={4} md={2} className="tech-icons">
        <FaDna />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiMicroscope />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiChemicalDrop />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaBacteria />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <MdScience />
      </Col>

      {/* Visualization & Reporting */}
      <Col xs={4} md={2} className="tech-icons">
        <SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTableau />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
      </Col>

      {/* Dev Tools */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
      </Col>
    </Row>
  );
}

export default Techstack;