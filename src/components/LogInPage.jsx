import React, { Component } from "react";

class LogInPage extends Component {
  state = {};

  render() {
    const backgroundImage = require("../images/background.png");
    const microsoftLogo = require("../images/microsoftlogo.jpg");

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
        <div className="container">
          <div className="signIn-container">
            <div className="row text-center">
              <h1 className="h1LogIn">Modul Bewertung </h1>
              <p>(Please sign-in by clicking the Microsoft Logo)</p>
              <a href="/">
                <img
                  src={microsoftLogo}
                  alt="Microsoft Logo"
                  className="microsoft-image"
                />
              </a>

              <span>
                No account? <a href="/">Create one!</a>
              </span>

              <a href="/">Can't access your account?</a>
              <div className="exitbutton-container">
                <button className="button-exit" href="LogOutPage">
                  Exit
                </button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LogInPage;
