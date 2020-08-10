import React from "react";
import "./Projects.css";
import { Hero, Slides } from "../../subComponents";
import { Container, Row, Col } from "react-bootstrap";

const Projects = () => {
  return (
    <Container
      id="projects"
      className="projects pt-2"
      style={{ minHeight: "450px" }}
    >
      <Hero title="Projects" />
      <Row className="d-flex justify-content-center">
        <Col className="col-md-6 f18 text-center text-bold">
          From pure Javascript to React, Redux, NodeJS and more... Check out some of my projects.
          More on my github!
        </Col>
      </Row>
      <Row>
        <Col>
          <Slides />
        </Col>
      </Row>
    </Container>
  );
};

export default Projects;
