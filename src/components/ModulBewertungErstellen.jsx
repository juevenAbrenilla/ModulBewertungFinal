import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModulBewertungErstellen = () => {
  const [projectTitle, setProjectTitle] = useState("");

  return (
    <div
      className="erstellen-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <div className="card shadow" style={{ width: "100%", maxWidth: "600px" }}>
        <div className="container my-5">
          <div className="mb-3 row">
            <label htmlFor="string" className="col-sm-3 col-form-label">
              Dozent :
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                readOnly
                className="form-control-plaintext"
                id="staticEmail"
                value="Dozent Name"
              />
            </div>
          </div>
          <div className="row mb-3">
            <label
              htmlFor="inputProjectTitle"
              className="col-sm-3 col-form-label"
            >
              Projekt Title :
            </label>
            <div className="col-sm-9">
              <input
                type="text"
                className="form-control"
                id="inputProjectTitle"
                value={projectTitle}
                onChange={(e) => setProjectTitle(e.target.value)}
              />
            </div>
          </div>

          <div className="d-flex justify-content-center mt-5">
            <Link
              to={{
                pathname: "/ModulBewertung",
                state: { projectTitle: projectTitle },
              }}
              className="btn btn-dark mx-2"
            >
              Speichern
            </Link>

            <Link
              to={{
                pathname: "/MainMenu",
                state: { projectTitle: projectTitle },
              }}
              className="btn btn-dark mx-2"
            >
              Züruck
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulBewertungErstellen;
