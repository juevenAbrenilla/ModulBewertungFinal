import React, { useState } from "react";
import { Link } from "react-router-dom";

const MainPageWithHeader = () => {
  const [projectTitle] = useState("");
  const MischokLogo = require("../images/MischokLogoWhite01.png");
  const ModulBewertungImage = require("../images/teachers-rating.jpg");
  const LernzielKontrolleImage = require("../images/goal.jpg");

  return (
    <>
      <section>
        <nav className="navbar navbar-expand-md">
          <div className="container">
            <div className="logo-container">
              <img
                src={MischokLogo}
                alt="Mischok Logo"
                className="mischokLogo-image"
              />
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
      </section>

      <section>
        <div className="menu-container">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <img
                    src={ModulBewertungImage}
                    alt="Teachers deliberating"
                    className="modulBewertung-image card-img-top"
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

              <div className="col-md-6">
                <div className="card">
                  <img
                    src={LernzielKontrolleImage}
                    alt="Student Studying"
                    className="lernzielKontrolle-image card-img-top"
                  />
                  <div className="shadow p-4 bg-body-tertiary rounded">
                    <div className="card-body">
                      <h2 className="card-title pt-3 pb-2">
                        Lernzielkontrolle
                      </h2>
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
      </section>
    </>
  );
};

export default MainPageWithHeader;
