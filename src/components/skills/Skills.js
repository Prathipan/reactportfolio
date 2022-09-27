import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Progress from "./Progress";

const Skills = () => {
  return (
    <Container>
      <h2 className="text-center">Skills</h2>
      <p className="text-center">Skills that I know</p>
      <Row>
        <Col xl={6} lg={6} md={12} sm={12}>
          <div className="card m-2 p-3">
            <p className="text-center my-3">Front End</p>
            <div className="skills-container">
              HTML
              <Progress done="85" />
              CSS
              <Progress done="70" />
              BOOTSTRAP
              <Progress done="70" />
              JAVASCRIPT
              <Progress done="90" />
              REACT
              <Progress done="70" />
            </div>
          </div>
        </Col>
        <Col xl={6} lg={6} md={12} sm={12}>
          <div className="card mx-2 p-3">
            <p className="text-center my-3">Back End</p>
            <div className="skills-container">
              MySQL
              <Progress done="75" />
              MongoDB
              <Progress done="65" />
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Skills;
