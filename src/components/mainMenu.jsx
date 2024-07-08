import React, { Component } from "react";

class MainMenu extends Component {
  state = {};
  render() {
    return (
      <div className="menu-container">
        <div className="container">
          <div className="row text-center g-4">
            <div className="col-md">
              <div className="card" styles="width: 16rem;">
                <img
                  src="./images/teachers-rating.jpg"
                  class="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title pt-3 pb-2">Modul Bewertung</h5>
                  <a
                    href="./modulBewertungErstellen.jsx"
                    class="btn btn-primary px-4"
                  >
                    Erstellen
                  </a>
                </div>
              </div>
            </div>

            <div className="col-md">
              <div className="card" styles="width: 16rem;">
                <img src="./images/goal.jpg" class="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title pt-3 pb-2">Lernzielkontrolle</h5>
                  <a href="/" class="btn btn-primary px-4">
                    Erstellen
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MainMenu;
