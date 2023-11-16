import React, { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";
import loginpic from "../assets/images/login.jpg";
import { Form } from "react-bootstrap";
import { loginAPI, registerAPI } from "../services/allAPI";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Auth({ register }) {
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // handle registration function
  const handleRegister = async (e) => {
    e.preventDefault();
    const { username, email, password } = userData;
    if (!username || !email || !password) {
      toast.info("Please fill the form completely !!");
    } else {
      const result = await registerAPI(userData);
      console.log(result);
      if (result.status === 200) {
        toast.success(`${result.data.username} Registered Succesfully`);
        setUserData({
          username: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        toast.warning(result.response.data);
        console.log(result);
      }
    }
  };

  // handle login function
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = userData;
    if (!email || !password) {
      toast.info("Please fill the form completely !!");
    } else {
      const result = await loginAPI(userData);
      console.log(result);
      if (result.status === 200) {
        sessionStorage.setItem(
          "existingUser",
          JSON.stringify(result.data.existingUser)
        );
        sessionStorage.setItem("token", result.data.token);
        setUserData({
          email: "",
          password: "",
        });
        navigate("/");
      } else {
        toast.warning(result.response.data);
        console.log(result);
      }
    }
  };

  const isRegisterForm = register ? true : false;
  return (
    <>
      <div
        style={{ width: "100%", height: "100vh" }}
        className="d-flex justify-content-center align-items-center"
      >
        <div className="w-75 container">
          <div className="card shadow-0 border border-4 p-4">
            <Link style={{ textDecoration: "none", color: "black" }} to={"/"}>
              <div className="d-flex align-items-center text-muted">
                <i className="fa-solid fa-arrow-left me-2"></i> Back
              </div>{" "}
            </Link>
            <div className="row align-items-center">
              <div className="col-lg-6">
                <img style={{ width: "400px" }} src={loginpic} alt="auth pic" />
              </div>
              <div className="col-lg-6">
                <div className="d-flex align-items-center flex-column">
                  <h1 className="fw-bolder text-muted mt-2">Project Fair</h1>
                  <h5 className="fw-bolder mt-4 pb-3 text-muted">
                    {isRegisterForm
                      ? "Sign up to your Account"
                      : "Login to your Account"}
                  </h5>
                  <Form className="text-light w-100">
                    {isRegisterForm && (
                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control
                          type="text"
                          placeholder="Username"
                          value={userData.username}
                          onChange={(e) =>
                            setUserData({
                              ...userData,
                              username: e.target.value,
                            })
                          }
                        />
                      </Form.Group>
                    )}

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="email"
                        placeholder="Enter your email"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            email: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={userData.password}
                        onChange={(e) =>
                          setUserData({
                            ...userData,
                            password: e.target.value,
                          })
                        }
                      />
                    </Form.Group>
                    {isRegisterForm ? (
                      <div>
                        <button
                          onClick={handleRegister}
                          className="btn btn-dark"
                        >
                          Register
                        </button>
                        <p className="text-muted mt-2">
                          Already have Account ? Click here to{" "}
                          <Link to={"/login"} className="text-blue">
                            Login
                          </Link>
                        </p>
                      </div>
                    ) : (
                      <div>
                        <button
                          onClick={handleLogin}
                          className="btn btn-dark shadow-0"
                        >
                          Login
                        </button>
                        <p className="text-muted mt-2">
                          New user ? Click here to{" "}
                          <Link to={"/register"} className="text-blue">
                            Register
                          </Link>
                        </p>
                      </div>
                    )}
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default Auth;
