import React, { Component } from "react";

class LogOutPage extends Component {
  state = {};

  render() {
    const backgroundImage = require("../images/bluebackground01.jpg");

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
              <h1>Thank you for using Modul Bewertung Application</h1>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LogOutPage;
