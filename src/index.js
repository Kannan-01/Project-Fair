import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "./bootstrap.min.css";
import "mdb-react-ui-kit/dist/css/mdb.min.css";
import { BrowserRouter } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import ContextShare from "./Contexts/ContextShare";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ContextShare>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ContextShare>
  </React.StrictMode>
);
