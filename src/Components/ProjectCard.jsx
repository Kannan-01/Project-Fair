import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import Modal from "react-bootstrap/Modal";
import contact from "../assets/images/contact.png"
function ProjectCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card className="shadow-0 border btn" onClick={handleShow}>
        <Card.Img
          src={contact}
        />
          <Card.Title className="mt-3">Contact</Card.Title>
      </Card>
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col>
              <img
                src={contact}
                alt=""
                style={{ height: "200px" }}
                className="img-fluid"
              />
            </Col>
            <Col>
              <h2>Contact</h2>
              <p>
              a straightforward yet powerful CRUD (Create, Read, Update, Delete) Contact Application crafted in React. This application streamlines contact management, providing a user-friendly interface to create, view, update, and delete contacts.
              </p>
              <p>Languages used : <span className="fw-bolder">HTML,CSS,REACT</span></p>
            </Col>
          </Row>
          <div className="mt-3">
            <a href="https://github.com/Kannan-01/Contacts" target="_blank" className="btn shadow-0 ">
              <i class="fa-brands fa-github fa-2x"></i>
            </a>
            <a href="https://contacts-gamma.vercel.app/" target="_blank" className="btn shadow-0">
              <i class="fa-solid fa-link fa-2x"></i>
            </a>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ProjectCard;
