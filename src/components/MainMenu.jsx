import React from "react";
import { Link } from "react-router-dom";

const MainMenu = () => {
  return (
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
  );
};

export default MainMenu;
