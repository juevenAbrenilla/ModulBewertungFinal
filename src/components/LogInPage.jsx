import React, { Component } from "react";

class LogInPage extends Component {
  state = {};

  render() {
    const backgroundImage = require("./images/loginbackground.jpg");

    return (
      <div
        style={{
          height: "100vh",
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Add your content here */}
      </div>
    );
  }
}

export default LogInPage;
