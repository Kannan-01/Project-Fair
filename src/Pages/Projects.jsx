import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import Header from "../Components/Header";
import ProjectCard from "../Components/ProjectCard";
import { allProjectsAPI } from "../services/allAPI";

function Projects() {
  const [searchKey,setSearchkey]=useState("")
  const [allProjects, setAllProjects] = useState([]);
  const getAllProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await allProjectsAPI(searchKey,reqHeader);
      if (result.status === 200) {
        setAllProjects(result.data);
      } else {
        console.log(result);
      }
    }
  };
  useEffect(() => {
    getAllProjects();
  }, [searchKey]);
  console.log(allProjects);
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
            onChange={e=>setSearchkey(e.target.value)}
          />
          <i
            style={{ marginLeft: "-40px" }}
            class="fa-solid fa-magnifying-glass fa-rotate-90"
          ></i>
        </div>
      </div>
      <Row className="mt-5 container-fluid">
        {allProjects?.length > 0 ? (
          allProjects?.map((project) => (
            <Col sm={12} md={6} lg={4}>
              <ProjectCard project={project} className="shadow-0"/>
            </Col>
          ))
        ) : (
          <p className="fw-bolder text-danger fs-5">Please Login !!</p>
        )}
      </Row>
    </div>
  );
}

export default Projects;
