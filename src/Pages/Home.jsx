import React from "react";
import { Row, Col } from "react-bootstrap";
import titleImage from "../assets/images/sandy.jpg";
import ProjectCard from "../Components/ProjectCard";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100vh",
          backgroundColor: "white",
        }}
        className="container-fluid rounded"
      >
        <div>
          <Row className="align-items-center p-5">
            <Col sm={12} md={6}>
              <h1 style={{ fontSize: "80px" }} className="fw-bolder text-dark">
                Project Fair
              </h1>
              <p style={{ textTransform: "capitalize" }}>
                one stop destination for all software devolopment projects.
                where user can add and manage their projects. as well as access
                all projects available in our website... what are you waiting
                for !!!
              </p>
              <Link to={"/Login"} className="btn btn-dark">
                Start to explore
              </Link>
            </Col>
            <Col sm={12} md={6}>
              <img
                style={{ marginTop: "100px" }}
                className="w-75 ms-5"
                src={titleImage}
                alt="loading.."
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className="all-projects mt-5">
        <h1 className="text-center mb-5">Explore our projects</h1>
        <marquee behavior="" direction="" scrollAmount={20}>
          <div className="d-flex flex-row justify-content-between ">
            <div style={{ width: "400px" }}>
              <ProjectCard />
            </div>
          </div>
        </marquee>
      </div>
      <div className="text-center mt-5 mb-5">
        <Link to={"/projects"}>View more projects</Link>
      </div>
    </>
  );
}

export default Home;
