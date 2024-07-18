import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ModulBewertungListe = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://cors-anywhere.herokuapp.com/https://academy-u202309-020-cc517cb3324e.herokuapp.com/api/dokubewertung"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);
        setIsLoading(false);
      } catch (error) {
        console.error("There was a problem fetching the projects:", error);
        setError(error.message);
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) return <div>Lädt...</div>;
  if (error) return <div>Fehler: {error}</div>;

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
              {projects.map((project) => (
                <tr key={project.id}>
                  <th scope="row">{project.id}</th>
                  <td>{project.titel}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link
        to="/MainMenu"
        className="btn btn-dark buttons-m buttonList-container"
      >
        Zurück
      </Link>
    </>
  );
};

export default ModulBewertungListe;
