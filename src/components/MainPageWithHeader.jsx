import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainPageWithHeader = () => {
  const [projectTitle] = useState("");

  return (
    <>
      <nav className="navbar navbar-expand-md">
        <div className="container">
          <div className="logo-container">
            <img src="../images/WhiteLogo.svg" alt="Mischok Logo" />
          </div>
          <p className="header-title">Modul Bewertung</p>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ms-auto ">
              <li className="nav-item">
                <Link
                  to={{
                    pathname: "/ModulBewertungListe",
                    state: { projectTitle: projectTitle },
                  }}
                  className="link-light nav-link-space"
                >
                  Modul Bewertung Liste
                </Link>
              </li>
              <li className="nav-item">
                <a href="/" className="link-light nav-link-space">
                  Lernzielkontrolle Liste
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.mischok.academy"
                  className="link-light nav-link-space"
                >
                  Log-out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="menu-container">
        <div className="container">
          <div className="row text-center">
            <div className="col-md">
              <div className="card">
                <img
                  src="../images/teachers-rating.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="shadow p-4 bg-body-tertiary rounded">
                  <div className="card-body">
                    <h2 className="card-title pt-3 pb-2">Modul Bewertung</h2>
                    <Link
                      to="/ModulBewertungErstellen"
                      className="btn btn-primary px-4"
                    >
                      Erstellen
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card">
                <img
                  src="../images/goal.jpg"
                  className="card-img-top"
                  alt="..."
                />
                <div className="shadow p-4 bg-body-tertiary rounded">
                  <div className="card-body">
                    <h2 className="card-title pt-3 pb-2">Lernzielkontrolle</h2>
                    <Link to="/" className="btn btn-primary">
                      Erstellen
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainPageWithHeader;
