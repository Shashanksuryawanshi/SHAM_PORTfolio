import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg"; // replace with Shambhavi's avatar if available
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2Shambhavi() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.2em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi — I'm <b className="purple">Shambhavi Kumari</b>, a B.Tech (Biotechnology) student at Lovely Professional University (2023–2027).
              <br /><br />
              I combine laboratory experience with computational skills — fluent in{" "}
              <i><b className="purple">Python & Biopython</b></i> and experienced in{" "}
              <i><b className="purple">bioinformatics, data analysis</b></i>.
              <br /><br />
              My interests lie in{" "}
              <i><b className="purple">in-silico gene/protein analysis, molecular docking, and building ML models for biological data</b></i>.
              <br /><br />
              In the lab I’m experienced with media preparation, microbial culture handling, PCR/RT-PCR, gel electrophoresis and aseptic techniques — and I document experiments carefully following SOPs.
            </p>
          </Col>

          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to <span className="purple">connect</span> with me</p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="mailto:shambhavikumari088@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shambhavi-kumari-984a8a28b/" // replace with actual LinkedIn URL
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="" // replace with actual Github if available
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>

      </Container>
    </Container>
  );
}

export default Home2Shambhavi;
