import React, { createContext, useState } from "react";

export const ModulBewertungListContext = createContext();

export const ModulBewertungListProvider = ({ children }) => {
  const [projectTitle, setProjectTitle] = useState("");

  return (
    <ModulBewertungListContext.Provider
      value={{ projectTitle, setProjectTitle }}
    >
      {children}
    </ModulBewertungListContext.Provider>
  );
};
