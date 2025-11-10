import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shambhavi Kumari</span> 
            from <span className="purple"> Ranchi, Jharkhand</span>.
            <br />
            I am currently pursuing my <b className="purple">B.Tech in Biotechnology</b> 
            at Lovely Professional University (2023–2027).
            <br />
            <br />
            I’m passionate about merging <b className="purple">biotechnology and data science</b> — 
            exploring bioinformatics tools, machine learning, and 
            data-driven biological analysis to bring innovation to life sciences.
            <br />
            <br />
            I’ve gained hands-on experience as a <b className="purple">QC Microbiology Intern</b> 
            at Centrient Pharmaceutical Company, where I performed environmental monitoring, 
            sterility testing, and microbial culture analysis under GMP protocols.
            <br />
            <br />
            Apart from my technical and research interests, I love engaging in other activities that help me grow personally!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Anchoring
            </li>
            <li className="about-activity">
              <ImPointRight /> Public Speaking
            </li>
            <li className="about-activity">
              <ImPointRight /> Socializing & Team Collaboration
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Blending science, creativity, and data to make a real-world impact!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;