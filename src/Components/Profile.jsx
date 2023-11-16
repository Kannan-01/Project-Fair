import React from "react";
import Collapse from "react-bootstrap/Collapse";
import { useState } from "react";
function Profile() {
  const [open, setOpen] = useState(false);
  return (
    <div className="mt-5">
      <div className="d-flex justify-content-between">
        <h2>Profile</h2>
        <button className="btn shadow-0" onClick={() => setOpen(!open)}>
          <i class="fa-solid fa-angle-down fa-fade fa-2x"></i>{" "}
        </button>
      </div>{" "}
      <Collapse in={open}>
        <div className="row justify-content-center mt-3">
          {/* upload picture */}
          <label className="text-center">
            <input style={{ display: "none" }} type="file" />
            <img
              width={"200px"}
              height={"200px"}
              className="rounded-circle"
              src="https://images.vexels.com/media/users/3/147101/isolated/preview/b4a49d4b864c74bb73de63f080ad7930-instagram-profile-button.png"
              alt="loading"
            />
          </label>
          <div className="mt-3">
            <input type="text" className="form-control" placeholder="GitHub" />
          </div>
          <div className="mt-3">
            <input
              type="text"
              className="form-control"
              placeholder="Linkedin"
            />
          </div>
          <div className="mt-3 d-grid">
            <button className="btn btn-warning text-center">Update</button>
          </div>
        </div>
      </Collapse>
    </div>
  );
}

export default Profile;
