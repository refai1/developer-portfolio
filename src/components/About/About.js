import React from "react";
import "./About.css";
import { Hero } from "../../subComponents";
import { Container, Row, Col } from "react-bootstrap";

const About = () => {
  const skills = [
    "JavaScript",
    "Node.js",
    "React",
    "React Native",
    "redux",
    "Python",
    "Flask",
    "Django",
    "C++",
    "HTML",
    "(S)CSS",
    "JQuery",
    "Express",
    "Mongodb",
    "GraphQL",
    "Firebase",
    "MongoDB",
    "SQL",
    "PostgreSQL",
    "DynamoDB",
    "AWS",
    "Heroku",
    "Docker",
  ];

  const listSkills = skills.map((element) => <li> {element} </li>);

  return (
    <Container id="about" className="about pt-2" style={{ minHeight: "600px" }}>
      <Hero title="About me" />
      <Row className="d-flex align-items-center flex-column-reverse flex-md-row">
        <Col className=" col-lg-8 col-md-7 text-justify text-bold ">
          I am a Full Stack Developer specializing in the React framework. I'm
          an expert on all things JavaScript and Python.
          I discovered my passion for application development and design while
          completing a Master's degree in Computer Engineering. Since then I have
          been honing my skills to build unbelievable user experiences. I am comfortable
          working on all aspects of development and enjoy seeing ideas come to life in code.
          Here are a few technologies I've been working with recently:
          <ul className="skills mt-3">{listSkills}</ul>
        </Col>
        <div className="profil mb-5 mt-4 ml-md-5 shadow"></div>
      </Row>
    </Container>
  );
};

export default About;
