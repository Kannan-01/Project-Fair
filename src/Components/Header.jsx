import React from "react";
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBIcon,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
function Header({ insideDashboard }) {
  return (
    <>
      <MDBNavbar
        style={{ backgroundColor: "#f2f2f2" }}
        className="position-fixed w-100 top-0 z-1"
      >
        <MDBContainer fluid>
          <MDBNavbarBrand className="text-uppercase fw-bold">
            <Link to={"/"} className="text-muted">
              <MDBIcon fas icon="project-diagram" className="me-2" /> PROJECT
              FAIR
            </Link>{" "}
          </MDBNavbarBrand>
          {insideDashboard && (
            <Button
              style={{ backgroundColor: "#f2f2f2" }}
              className="text-muted shadow-0 fw-bold fs-6 "
            >
              <div className="d-flex align-items-center justify-content-center">
                Logout<i class="fa-solid fa-arrow-right-from-bracket ms-2"></i>
              </div>{" "}
            </Button>
          )}
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Header;
