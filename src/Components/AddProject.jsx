import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addProjectAPI } from "../services/allAPI";
function AddProject() {
  const [token, setToken] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
    setProjectDetails({
      title: "",
      languages: "",
      overview: "",
      github: "",
      website: "",
      projectImage: "",
    });
    setPreview("");
  };
  const handleShow = () => setShow(true);
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    languages: "",
    overview: "",
    github: "",
    website: "",
    projectImage: "",
  });
  const [preview, setPreview] = useState("");

  // console.log(projectDetails);
  console.log(preview);
  useEffect(() => {
    if (projectDetails.projectImage)
      setPreview(URL.createObjectURL(projectDetails.projectImage));
  }, [projectDetails.projectImage]);
  // for getting userId
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    } else {
      setToken("");
    }
  }, []);
  // for add project
  const handleAdd = async (e) => {
    e.preventDefault();
    const { title, languages, overview, github, website, projectImage } =
      projectDetails;
    if (
      !title ||
      !languages ||
      !overview ||
      !github ||
      !website ||
      !projectImage
    ) {
      toast.warning("please fill the form completely");
    } else {
      const reqBody = new FormData();
      reqBody.append("title", title);
      reqBody.append("languages", languages);
      reqBody.append("overview", overview);
      reqBody.append("github", github);
      reqBody.append("website", website);
      reqBody.append("projectImage", projectImage);
      if (token) {
        const reqHeader = {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        };
        const result = await addProjectAPI(reqBody, reqHeader);
        if (result.status === 200) {
          console.log(result.data);
          handleClose()
          alert("project added")
        } else {
          console.log(result);
          toast.warning(result.response.data);
        }
      }
    }
  };
  return (
    <div>
      <Button variant="dark" onClick={handleShow}>
        Add projects
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Project Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col-lg-6">
              <label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      projectImage: e.target.files[0],
                    })
                  }
                />
                <img
                  className="img-fluid"
                  src={
                    preview
                      ? preview
                      : "https://i0.wp.com/kifabrik.mirmi.tum.de/wp-content/uploads/2022/05/placeholder-139.png?ssl=1"
                  }
                  alt=""
                />
              </label>
            </div>
            <div className="col-lg-6">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Project title"
                  value={projectDetails.title}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      title: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Language used"
                  value={projectDetails.languages}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      languages: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Github link"
                  value={projectDetails.github}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      github: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Website link"
                  value={projectDetails.website}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      website: e.target.value,
                    })
                  }
                />
              </div>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Project overview"
                  value={projectDetails.overview}
                  onChange={(e) =>
                    setProjectDetails({
                      ...projectDetails,
                      overview: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
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
    </div>
  );
}

export default AddProject;
