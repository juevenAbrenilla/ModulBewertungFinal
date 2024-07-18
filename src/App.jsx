import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./components/LogInPage";
import Header from "./components/Header";
import MainMenu from "./components/MainMenu";
import ModulBewertungErstellen from "./components/ModulBewertungErstellen";
import ModulBewertung from "./components/ModulBewertung";
import ModulBewertungListe from "./components/ModulBewertungListe";
import LogOutPage from "./components/LogOutPage";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Fragment>
          <Route index element={<LogInPage />} />
          <Route path="/mainmenu" element={<MainMenu />} />
          <Route
            path="/ModulBewertungErstellen"
            element={<ModulBewertungErstellen />}
          />
          <Route path="/ModulBewertung" element={<ModulBewertung />} />
          <Route path="/MainMenu" element={<MainMenu />} />
          <Route
            path="/ModulBewertungListe"
            element={<ModulBewertungListe />}
          />
          <Route path="/LogOutPage" element={<LogOutPage />} />
        </Fragment>
      </Routes>
    </>
  );
};

export default App;
