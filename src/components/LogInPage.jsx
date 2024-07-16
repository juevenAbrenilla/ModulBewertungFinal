import React, { Component } from "react";

class LogInPage extends Component {
  state = {};

  render() {
    const backgroundImage = require("../images/loginbackground.jpg");

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
              <h1>Sign In</h1>
              <div>
                <a href="/">
                  <img src="./images/microsoftlogo.jpg" alt="..." />
                </a>
              </div>
              <div>
                <span>
                  No account? <a href="/">Create one!</a>
                </span>
              </div>
              <a href="/">Can't access your account?</a>
              <button className="button-exit" href="/">
                Exit
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default LogInPage;
