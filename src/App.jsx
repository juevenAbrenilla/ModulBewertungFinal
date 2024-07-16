import React from "react";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./components/LogInPage";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import ModulBewertungErstellen from "./components/ModulBewertungErstellen";
import ModulBewertung from "./components/ModulBewertung";
import ModulBewertungListe from "./components/ModulBewertungListe";

const App = () => {
  return (
    <>
      <LogInPage />
      <Header />
      <Routes>
        <Route path="/" element={<MainMenu />} />
        <Route
          path="/ModulBewertungErstellen"
          element={<ModulBewertungErstellen />}
        />
        <Route path="/ModulBewertung" element={<ModulBewertung />} />
        <Route path="/MainMenu" element={<MainMenu />} />
        <Route path="/ModulBewertungListe" element={<ModulBewertungListe />} />
      </Routes>
    </>
  );
};

export default App;
