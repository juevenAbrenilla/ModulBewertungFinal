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
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td colSpan="2">Larry the Bird</td>
                <td>@twitter</td>
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
