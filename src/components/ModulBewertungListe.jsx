import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ModulBewertungListe = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const backgroundImage = require("../images/bluebackground01.jpg");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://academy-u202309-020-cc517cb3324e.herokuapp.com/api/dokubewertung",
          {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
            credentials: "include", // Fügt Cookies zur Anfrage hinzu, falls erforderlich
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setProjects(data);
      } catch (error) {
        console.error(
          "Es gab ein Problem beim Abrufen der Projekte:",
          error.message
        );
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (isLoading) return <div>Lädt...</div>;
  if (error) return <div>Fehler beim Laden der Daten: {error}</div>;

  return (
    <>
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="ModulBewertungListe-container">
        <div className="container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">ID #</th>
                <th scope="col">Doku Bewertung Titel</th>
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
