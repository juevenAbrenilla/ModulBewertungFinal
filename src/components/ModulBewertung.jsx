import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModulBewertung = () => {
  const [projectTitle, setProjectTitle] = useState("");

  return (
    <section className="bg-primary text-light mt-5 p-5">
      <div className="container">
        <d-md-flex className="justify-content-between align-items-center">
          <h3 className="mb-3 mb-md-0">Dozent Name:</h3>
        </d-md-flex>
        <div className="col-sm-7">
          <input
            type="text"
            className="form-control"
            id="inputProjectTitle"
            value={projectTitle}
            onChange={(e) => setProjectTitle(e.target.value)}
          />
        </div>
        <div className="d-flex mt-5 buttons-container">
          <Link
            to={{
              pathname: "/MainMenu",
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
    </section>
  );
};

export default ModulBewertung;
