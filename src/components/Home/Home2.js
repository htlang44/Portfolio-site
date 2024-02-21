import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGitlab,

} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Having worked in both the music and tech industries, I made the decision to pursue an education and career as a Full Stack Engineer.
              <br />
              <br />I am proficient in
              <i>
                <b className="purple"> Python and Javascript </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new&nbsp;
              <i>
                <b className="purple">Websites and Applications </b> and
                also in areas related to{" "}
                <b className="purple">
                  Front-end and Back-end Development.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I try and utliize my skills
              with <b className="purple">Django, FastAPI, Flask, and Node,js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js, HTMX, React-Redux and Next.js</b>
              </i>
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
            <p>
              Feel free to <span className="purple">reach out</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://gitlab.com/hunterlang44"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGitlab/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/hunter-lang-3aa1871b3/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
