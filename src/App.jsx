import React, { Component } from "react";
import Header from "./components/header";
import MainMenu from "./components/mainMenu";
import ModulBewertungErstellen from "./components/modulBewertungErstellen";
import ModulBewertung from "./components/ModulBewertung";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <MainMenu />
        <ModulBewertungErstellen />
        <ModulBewertung />
      </>
    );
  }
}

export default App;
