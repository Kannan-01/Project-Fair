import React, { useContext, useEffect, useState } from "react";
import { Alert } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  addProjectResponseContext,
  editProjectResponseContext,
} from "../Contexts/ContextShare";
import { deleteProjectAPI, userProjectsAPI } from "../services/allAPI";
import AddProject from "./AddProject";
import EditProject from "./EditProject";

function UserProject() {
  const { editProjectResponse, seteditProjectResponse } = useContext(
    editProjectResponseContext
  );

  const { addProjectResponse, setAddProjectResponse } = useContext(
    addProjectResponseContext
  );
  const [userProjects, setUserProjects] = useState([]);
  const getUserProjects = async () => {
    if (sessionStorage.getItem("token")) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await userProjectsAPI(reqHeader);
      if (result.status === 200) {
        setUserProjects(result.data);
      } else {
        console.log(result);
        toast.warning(result.response.data);
      }
    }
  };

  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const result = await deleteProjectAPI(id, reqHeader);
    if (result.status === 200) {
      getUserProjects();
    } else {
      console.log(result.response.data);
    }
  };
  useEffect(() => {
    getUserProjects();
  }, [addProjectResponse, editProjectResponse]);

  return (
    <div className="card shadow-0 border-2 border mt-3 p-3">
      <div className="d-flex align-items-center">
        <h4>My Projects</h4>
        <div className="ms-auto">
          <AddProject />
        </div>
      </div>
      {addProjectResponse.title && (
        <Alert dismissible className="mt-3">
          <span className="fw-boldder text-danger me-1">
            {addProjectResponse.title}
          </span>
          added successfully!!!
        </Alert>
      )}
      <div className="mt-4">
        {/* collection of user projects */}
        {userProjects?.length > 0 ? (
          userProjects.map((project) => (
            <div className="border d-flex align-items-center rounded p-2">
              <h5 className="text-capitalize">{project.title}</h5>

              <div className="icon ms-auto">
                <button className="border border-0 bg-white">
                  {" "}
                  <EditProject project={project} />
                </button>
                <a
                  href={`${project.github}`}
                  target="_blank"
                  className="btn shadow-0"
                >
                  <i className="fa-brands fa-github fa-2x"></i>{" "}
                </a>
                <button
                  onClick={() => handleDelete(project._id)}
                  className="btn shadow-0"
                >
                  <i class="fa-solid fa-trash fa-2x"></i>{" "}
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-muted fw-bolder fs-5 text-capitalize">
            No project uploaded yet !!
          </p>
        )}
      </div>
    </div>
  );
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
  />;
}

export default UserProject;
