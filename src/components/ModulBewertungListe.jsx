import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ModulBewertungListe = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://academy-u202309-020-cc517cb3324e.herokuapp.com/api/dokubewertung"
        );
        const data = await response.json();
        const filteredData = data.map((project) => ({
          id: project.id,
          titel: project.titel,
        }));
        setProjects(filteredData);
      } catch (error) {
        console.error("Fehler beim Abrufen der Projektdaten:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="ModulBewertungListe-container">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Projekt Titel</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr key={project.id}>
                  <th scope="row">{index + 1}</th>
                  <td>{project.titel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link
        to={{
          pathname: "/MainMenu",
          state: { projectTitle: "" },
        }}
        className="btn btn-dark buttons-m buttonList-container"
      >
        Züruck
      </Link>
    </>
  );
};

export default ModulBewertungListe;
