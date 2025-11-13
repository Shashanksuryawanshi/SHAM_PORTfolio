import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/sham.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2Shambhavi() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row className="align-items-center">
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.2em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>

            <p className="home-about-body">
              Hi — I'm <b className="purple">Shambhavi Kumari</b>, a B.Tech (Biotechnology) student at Lovely Professional University (2023–2027).
              <br />
              <br />
              I combine laboratory experience with computational skills — fluent in{" "}
              <i><b className="purple">Python &amp; Biopython</b></i> and experienced in{" "}
              <i><b className="purple">bioinformatics, data analysis</b></i>.
              <br />
              <br />
              My interests lie in{" "}
              <i><b className="purple">in-silico gene/protein analysis, molecular docking, and building ML models for biological data</b></i>.
              <br />
              <br />
              In the lab I’m experienced with media preparation, microbial culture handling, PCR/RT-PCR, gel electrophoresis and aseptic techniques — and I document experiments carefully following SOPs.
            </p>
          </Col>

          <Col md={4} className="myAvtar text-center">
            <Tilt
              tiltMaxAngleX={10}
              tiltMaxAngleY={10}
              perspective={1000}
              scale={1.03}
              transitionSpeed={400}
              glareEnable={false}
            >
              <img
                src={myImg}
                className="img-fluid"
                alt="Shambhavi Kumari avatar"
                style={{
                  maxWidth: "250px",
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0 12px 30px rgba(0,0,0,0.35)",
                }}
                loading="lazy"
                title="Shambhavi Kumari"
              />
            </Tilt>
          </Col>
        </Row>

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>Feel free to <span className="purple">connect</span> with me</p>
            <ul className="home-about-social-links list-unstyled d-flex gap-3">
              <li className="social-icons">
                <a
                  href="mailto:shambhavikumari088@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Send email to Shambhavi"
                >
                  <AiOutlineMail size={28} />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/shambhavi-kumari-984a8a28b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Shambhavi's LinkedIn"
                >
                  <FaLinkedinIn size={26} />
                </a>
              </li>

              <li className="social-icons">
                <a
                  href="https://github.com/" 
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                  aria-label="Shambhavi's GitHub"
                >
                  <AiFillGithub size={28} />
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
