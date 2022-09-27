import React, { useState } from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./education.css";

const Education = () => {
  return (
    <Container className="education-container">
      <Row>
        <Col className="education">
          <h3>Education</h3>
          <div className="timeline-box">
            <div className="timeline">
              <div className="timeline-item">
                <div className="circle"></div>
                <h3 className="timeline-date">
                  <i class="uil uil-calendar-alt"></i> 2013-2014
                </h3>
                <h4 className="timeline-title">SSLC</h4>
                <p className="timeline-text">
                  Zion Good shepherd's matriculation higher secondary school
                </p>
                <p>percentage :<span>96%</span> </p>
              </div>
              <div className="timeline-item">
                <div className="circle"></div>
                <h3 className="timeline-date">
                  <i class="uil uil-calendar-alt"></i> 2015-2016
                </h3>
                <h4 className="timeline-title">HSC</h4>
                <p className="timeline-text">
                  Zion Good shepherd's matriculation higher secondary school
                </p>
                <p>percentage :<span>85%</span> </p>
              </div>
              <div className="timeline-item">
                <div className="circle"></div>
                <h3 className="timeline-date">
                  <i class="uil uil-calendar-alt"></i> 2016-2020
                </h3>
                <h4 className="timeline-title">BE / CSE</h4>
                <p className="timeline-text">
                  K.L.N College Of Engineering
                </p>
                <p>percentage :<span>73%</span> </p>
              </div>
            </div>
          </div>
        </Col>
        <Col className="experience">
          <h3>Experience</h3>
          <div className="timeline-box">
            <div className="timeline">
              <div className="timeline-item">
                <div className="circle"></div>
                <h3 className="timeline-date">
                  <i class="uil uil-calendar-alt"></i> 2020-Present
                </h3>
                <h4 className="timeline-title">SSO Engineer</h4>
                <p className="timeline-text">
                  HCL Technologies
                </p>
                <ul>
                  <li>Monitoring servers</li>
                  <li>Working with Kibana</li>
                  <li>Analuzing server logs</li>
                  <li>Doing patching activities</li>
                </ul>
              </div>
              <div className="timeline-item">
                <div className="circle"></div>
                <h3 className="timeline-date">
                  <i class="uil uil-calendar-alt"></i> 2021-present
                </h3>
                <h4 className="timeline-title">Web Development</h4>
                <p className="timeline-text">
                  Freelance
                </p>
                <ul>
                  <li>Working with HTML, CSS, Javascript</li>
                  <li>Working with React hooks like useState,useEffect</li>
                  <li>Working with multiple libraries </li>
                </ul>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Education;
