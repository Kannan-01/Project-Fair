import React from "react";
import AddProject from "./AddProject";

function UserProject() {
  return (
    <div className="card shadow-0 border-2 border mt-3 p-3">
      <div className="d-flex align-items-center">
        <h4>My Projects</h4>
        <div className="ms-auto">
          <AddProject />
        </div>
      </div>
      <div className="mt-4">
        {/* collection of user projects */}
        <div className="border d-flex align-items-center rounded p-2">
          <h5>Project Title</h5>
          <div className="icon ms-auto">
            <button className="btn shadow-0">
              <i class="fa-solid fa-pen-to-square fa-2x"></i>
            </button>
            <button className="btn shadow-0">
              <i class="fa-brands fa-github fa-2x"></i>{" "}
            </button>

            <button className="btn shadow-0">
              <i class="fa-solid fa-trash fa-2x"></i>{" "}
            </button>
          </div>
        </div>
        <p className="text-muted fw-bolder fs-5 text-capitalize">
          {" "}
          No project uploaded yet !!
        </p>
      </div>
    </div>
  );
}

export default UserProject;
