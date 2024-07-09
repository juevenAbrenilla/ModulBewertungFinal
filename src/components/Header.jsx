import React, { Component } from "react";

class Header extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar fixed-top">
          <div>
            <p className="header-title">Modul Bewertung</p>
          </div>
          <div className="logo-container">
            <img src="./images/WhiteLogo.svg" alt="Mischok Logo" />
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
