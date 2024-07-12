import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModulBewertungErstellen = () => {
  const [projectTitle, setProjectTitle] = useState("");

  return (
    <div className="erstellen-container">
      <div className="card" style={{ width: "43%" }}>
        <div className="card shadow">
          <div className="container my-5" style={{ paddingLeft: "90px" }}>
            <div className="mb-3 row">
              <label htmlFor="string" className="col-sm-2 col-form-label">
                Dozent :
              </label>
              <div className="col-sm-6">
                <input
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  id="staticEmail"
                  value="Dozent Name"
                />
              </div>
            </div>
            <div className="row">
              <label
                htmlFor="inputProjectTitle"
                className="col-sm-2 col-form-label"
              >
                Projekt Title :
              </label>
              <div className="col-sm-7">
                <input
                  type="text"
                  className="form-control"
                  id="inputProjectTitle"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="d-flex mt-5 buttons-container">
              <Link
                to={{
                  pathname: "/ModulBewertung",
                  state: { projectTitle: projectTitle },
                }}
                className="btn btn-dark buttons-m"
              >
                Speichern
              </Link>

              <Link
                to={{
                  pathname: "/MainMenu",
                  state: { projectTitle: projectTitle },
                }}
                className="btn btn-dark buttons-m"
              >
                Züruck
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulBewertungErstellen;
