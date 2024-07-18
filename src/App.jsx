import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import LogInPage from "./components/LogInPage";
import MainPageWithHeader from "./components/MainPageWithHeader";
import ModulBewertungErstellen from "./components/ModulBewertungErstellen";
import ModulBewertung from "./components/ModulBewertung";
import ModulBewertungListe from "./components/ModulBewertungListe";
import LogOutPage from "./components/LogOutPage";

const App = () => {
  return (
    <>
      <Routes>
        <Fragment>
          <Route index element={<LogInPage />} />
          <Route path="/MainPageWithHeader" element={<MainPageWithHeader />} />
          <Route
            path="/ModulBewertungErstellen"
            element={<ModulBewertungErstellen />}
          />
          <Route path="/ModulBewertung" element={<ModulBewertung />} />

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
