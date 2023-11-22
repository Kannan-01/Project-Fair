import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import contact from "../assets/images/contact.png";
import { BASE_URL } from "../services/baseurl";
function ProjectCard({ project }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      {project && (
        <Card className="btn" onClick={handleShow}>
          <Card.Title className="mt-3">{project.title}</Card.Title>
          <Card.Img
            src={
              project ? `${BASE_URL}/Uploads/${project?.projectImage}` : contact
            }
            className="rounded-0"
          />
        </Card>
      )}

      {project && (
        <Modal size="lg" show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Project Details</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Row>
              <Col>
                <img
                  src={
                    project
                      ? `${BASE_URL}/Uploads/${project?.projectImage}`
                      : contact
                  }
                  alt=""
                  style={{ height: "200px" }}
                  className="img-fluid"
                />
              </Col>
              <Col>
                <h2 className="text-uppercase">{project.title}</h2>
                <p>
                  <span className="fw-bold"> Project Overview: </span>
                  {project.overview}
                </p>
                <p>
                  Languages used :
                  <span className="fw-bolder text-uppercase">
                    {project.languages}
                  </span>
                </p>
              </Col>
            </Row>
            <div className="mt-3">
              <a
                href={project.github}
                target="_blank"
                className="btn shadow-0 "
              >
                <i class="fa-brands fa-github fa-2x"></i>
              </a>
              <a
                href={project.website}
                target="_blank"
                className="btn shadow-0"
              >
                <i class="fa-solid fa-link fa-2x"></i>
              </a>
            </div>
          </Modal.Body>
        </Modal>
      )}
    </>
  );
}

export default ProjectCard;
