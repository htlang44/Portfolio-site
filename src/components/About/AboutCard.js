import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello, I am <span className="purple">Hunter Lang </span>
            and I am from the great state of <span className="purple"> Texas.</span>
            <br />
            I finished the 19-week Hakc Reactor bootcamp in Feburary 2024 and now I am currently seeking employment.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Disc Golf with my Dog
            </li>
            <li className="about-activity">
              <ImPointRight /> Producing Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
          "When you have a dream, you've got to grab it and never let go."{" "}
          </p>
          <footer className="blockquote-footer">Carol Burnett</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
