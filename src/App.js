import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Projects from "./components/projects/Projects";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col lg={3} md={3} sm={2}>
            <SideBar />
          </Col>
          <Col
            lg={9}
            md={9}
            sm={10}
            className="main-content"
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/skills" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default App;
