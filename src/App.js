import React, { useState } from "react";
import { motion } from "framer-motion";
import { Container, Row, Col } from "react-bootstrap";
import Header from "./components/Header";
import ReefCamModel from "./components/ReefCamModel";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import FadeIn from "./components/FadeIn";
import ProjectLog from "./components/ProjectLog";

const projectData = [
  {
    name: "Project 1",
    description: "This is the first project.",
    media: "https://via.placeholder.com/300"
  }
];

const Project = ({ name, description, media }) => {
  const [isPressed, setIsPressed] = useState(false);
  const backdropVariants = {
    initial: {
      backgroundColor: "blue",
      scale: 1.8,
      rotate: 10,
      borderRadius: "10%"
    },
    final: {
      backgroundColor: "red",
      scaleX: 1.5,
      scaleY: 0.6,
      translateY: 400,
      rotate: 120,
      borderRadius: "50%"
    }
  };
  return (
    <Row className="project">
      <Col sm={12} md={6}>
        <FadeIn>
          <div
            style={{
              alignItems: "center",
              justifyContent: "center",
              paddingLeft: "6rem",
              paddingTop: "6rem"
            }}
          >
            <ProjectLog index={0} />
            <ProjectLog index={1} />
            <ProjectLog index={2} />
            <ProjectLog index={3} />
            <ProjectLog index={4} />
            <ProjectLog index={5} />
            <ProjectLog index={6} />
            <ProjectLog index={7} />
            <ProjectLog index={8} />
            <ProjectLog index={9} />
            <ProjectLog index={10} />
            <ProjectLog index={11} />
          </div>
        </FadeIn>
      </Col>

      <Col sm={12} md={6}>
        <FadeIn duration={2}>
          <div
            style={{
              position: "relative"
            }}
          >
            <ReefCamModel setIsPressed={setIsPressed} />
            <motion.div
              style={{
                position: "absolute",
                top: 0,
                left: 0
              }}
              className="media-container"
            >
              <motion.div
                variants={backdropVariants}
                animate={isPressed ? "final" : "initial"}
                style={{
                  background:
                    "linear-gradient(0deg, rgba(106,127,154,1) 18%, rgba(232,238,238,1) 100%)",
                  height: "35%",
                  width: "35%",
                  alignItems: "center",
                  justifyContent: "center"
                }}
              ></motion.div>
            </motion.div>
          </div>
        </FadeIn>
      </Col>
    </Row>
  );
};

const App = () => {
  return (
    <div>
      <Header />
      <Container fluid>
        <Project {...projectData[0]} />
      </Container>
    </div>
  );
};

export default App;
