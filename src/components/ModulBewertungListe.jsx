import React, { useState } from "react";
import { Link } from "react-router-dom";

const ModulBewertungListe = () => {
  const [projectTitle] = useState("");

  return (
    <>
      <div className="ModulBewertungListe-container">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Projekt Title</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Link
        to={{
          pathname: "/MainMenu",
          state: { projectTitle: projectTitle },
        }}
        className="btn btn-dark buttons-m buttonList-container"
      >
        Züruck
      </Link>
    </>
  );
};

export default ModulBewertungListe;
