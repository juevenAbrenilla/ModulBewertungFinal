import React from "react";
import { Link } from "react-router-dom";

const ModulBewertungErstellen = () => {
  return (
    <div className="erstellen-container">
      <div className="card" style={{ width: "50%", margin: "0 auto" }}>
        <div className="container my-5" style={{ paddingLeft: "90px" }}>
          <div className="mb-3 row">
            <label for="string" class="col-sm-2 col-form-label">
              Dozent :
            </label>
            <div className="col-sm-6">
              <input
                type="text"
                readonly
                className="form-control-plaintext"
                id="staticEmail"
                value="Dozent Name"
              />
            </div>
          </div>
          <div className="mb-3 row">
            <label for="inputProjectTitle" className="col-sm-2 col-form-label">
              Projekt Title :
            </label>
            <div className="col-sm-6">
              <input
                type="string"
                className="form-control"
                id="inputProjectTitle"
              />
              <Link to="/ModulBewertung" className="btn btn-dark mt-4 px-4">
                Speichern
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModulBewertungErstellen;
