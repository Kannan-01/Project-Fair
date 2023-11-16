import React from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../Components/Header";
import ProjectCard from "../Components/ProjectCard";
function Projects() {
  return (
    <div style={{ marginTop: "100px" }} className="projects">
      <Header />
      <h1 className="text-center mb-5">All Projects</h1>
      <div className="d-flex justify-content-center align-items-center w-100">
        <div className="d-flex border w-50 rounded">
          <input
            type="text"
            className="form-control"
            placeholder="search projects by its technologies used"
          />
          <i
            style={{ marginLeft: "-40px" }}
            class="fa-solid fa-magnifying-glass fa-rotate-90"
          ></i>
        </div>
      </div>
      <Row className="mt-5 container-fluid">
          <Col sm={12} md={6} lg={4}>
            <ProjectCard z/>
          </Col>
        </Row>
    </div>
  );
}

export default Projects;
