import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Header from "../Components/Header";
import Profile from "../Components/Profile";
import UserProject from "../Components/UserProject";

function Dashboard() {
  const [username, setUserName] = useState("");
  useEffect(() => {
    if (sessionStorage.getItem("existingUser")) {
      setUserName(JSON.parse(sessionStorage.getItem("existingUser")).username);
    }
  }, []);
  return (
    <>
      <Header insideDashboard />
      <div className="container-fluid">
        <Row style={{ marginTop: "100px" }} className="container-fluid">
          <Col sm={12} md={8}>
            {/* my project */}
            <h2 className="text-black">
              Welcome <span className="text-muted text-capitalize">{username}</span>
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
