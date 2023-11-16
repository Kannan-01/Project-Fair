import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div>
      <MDBFooter
        bgColor="light"
        className="text-center text-lg-start text-muted mt-5"
      >
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="facebook-f" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="twitter" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="google" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="instagram" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="linkedin" />
            </a>
            <a href="" className="me-4 text-reset">
              <MDBIcon fab icon="github" />
            </a>
          </div>
        </section>

        <section className="">
          <MDBContainer className="text-center text-md-start mt-5">
            <MDBRow className="mt-3">
              <MDBCol md="3" lg="4" xl="3" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-3">
                <MDBIcon fas icon="project-diagram" className="me-2" />
                  Project Fair
                </h6>
                <p>
                  Design and built with all the love in the world by the Luminar
                  Technolab, june 23 Batch team with the help of our
                  contibutors. Currently v 1.0.0
                </p>
              </MDBCol>

              <MDBCol md="2" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Links</h6>
                <p>
                  <Link to={"/"} className="text-reset">
                    Home
                  </Link>{" "}
                </p>
                <p>
                  <Link to={"/register"} className="text-reset">
                    Register
                  </Link>{" "}
                </p>
                <p>
                  <Link to={"/projects"} className="text-reset">
                    Projects
                  </Link>{" "}
                </p>
                <p>
                  <Link to={"/dashboard"} className="text-reset">
                    Dashboard
                  </Link>{" "}
                </p>
              </MDBCol>

              <MDBCol md="3" lg="2" xl="2" className="mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </MDBCol>

              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <MDBIcon icon="home" className="me-2" />
                  Kakkanad, Kochi
                </p>
                <p>
                  <MDBIcon icon="envelope" className="me-3" />
                  info@luminartechnolab.com
                </p>
                <p>
                  <MDBIcon icon="phone" className="me-3" /> 0484 2874845
                </p>
                <p>
                  <MDBIcon icon="print" className="me-3" /> 0484 2874845
                </p>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <MDBContainer>
            <form action="">
              <MDBRow className="d-flex justify-content-center">
                <MDBCol size="auto">
                  <p className="pt-2">
                    <strong>Sign up for our newsletter</strong>
                  </p>
                </MDBCol>

                <MDBCol md="5" size="12" className="mb-3 mb-md-0 ">
                  <MDBInput
                    type="text"
                    id="form5Example2"
                    label="Email address"
                  />
                </MDBCol>

                <MDBCol size="auto" className="mb-4 mb-md-0 ">
                  <MDBBtn className="bg-black">Subscribe</MDBBtn>
                </MDBCol>
              </MDBRow>
            </form>
          </MDBContainer>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          © 2023 Copyright: Project Fair. Built With React.
        </div>
      </MDBFooter>
    </div>
  );
}

export default Footer;
