import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [projectTitle] = useState("");

  return (
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
  );
};

export default Header;
