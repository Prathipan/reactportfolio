import React from "react";
import { Col, Row, Container } from "react-bootstrap";
import "./education.css";
import Timeline from "./Timeline";

const Education = () => {
  const timelineItems = [
    {
      qualification : "SSLC",
      year : "2013-2014",
      institute : "Zion Good shepherd's matriculation higher secondary school",
      mark : "96%"
    },
    {
      qualification : "HSC",
      year : "2015-2016",
      institute : "Zion Good shepherd's matriculation higher secondary school",
      mark : "85%"
    },
    {
      qualification : "BE / CSE",
      year : "2016-2020",
      institute : "K.L.N College Of Engineering",
      mark : "73%"
    }
  ]
  return (
    <Container className="education-container">
      <Row>
        <Col className="education">
          <h3>Education</h3>
          <div className="timeline-box">
            <div className="timeline">
              {timelineItems.map((timelineItem,i) => {
                return <Timeline key={i} props={timelineItem} />
              })}
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
                  <i className="uil uil-calendar-alt"></i> 2020-Present
                </h3>
                <h4 className="timeline-title">SSO Engineer</h4>
                <p className="timeline-text">
                  HCL Technologies
                </p>
                <ul>
                  <li>Monitoring servers</li>
                  <li>Working with Kibana</li>
                  <li>Analyzing server logs</li>
                  <li>Doing patching activities</li>
                </ul>
              </div>
              <div className="timeline-item">
                <div className="circle"></div>
                <h3 className="timeline-date">
                  <i className="uil uil-calendar-alt"></i> 2021-present
                </h3>
                <h4 className="timeline-title">Web Development</h4>
                <p className="timeline-text">
                  Freelance
                </p>
                <ul>
                  <li>Working with HTML, CSS, Javascript</li>
                  <li>Wrking with react components</li>
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
