import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import ModulBewertungErstellen from "./components/ModulBewertungErstellen";
import ModulBewertung from "./components/ModulBewertung";

class App extends Component {
  state = {};
  render() {
    return (
      <>
        <Header />
        <MainMenu />
        <Routes>
          <Route
            path="ModulBewertungErstellen"
            component={ModulBewertungErstellen}
          />
          <Route path="/ModulBewertung" component={ModulBewertung} />
        </Routes>
      </>
    );
  }
}

export default App;
