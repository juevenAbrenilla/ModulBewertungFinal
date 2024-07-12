import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import ModulBewertungErstellen from "./components/ModulBewertungErstellen";
import ModulBewertung from "./components/ModulBewertung";
import ModulBewertungListe from "./components/ModulBewertungListe";
import LogOut from "./LogOut";

const App = () => {
  return (
    <>
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
        <Route path="/LogOut" element={<LogOut />} />
      </Routes>
    </>
  );
};

export default App;
