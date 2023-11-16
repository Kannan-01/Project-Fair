import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";
import Profile from "../Components/Profile";
import UserProject from "../Components/UserProject";

function Dashboard() {
  return (
    <>
      <Header insideDashboard />
      <div className="container-fluid">
        <Row style={{ marginTop: "100px" }} className="container-fluid">
          <Col sm={12} md={8}>
            {/* my project */}
            <h2 className="text-black">
              Welcome <span className="text-muted">User</span>
            </h2>
            <UserProject />
          </Col>
          <Col sm={12} md={4}>
            {/* my profile */}
            <Profile />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Dashboard;
