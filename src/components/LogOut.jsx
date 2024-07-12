import React from "react";
import { useHistory } from "react-router-dom";

const LogOut = () => {
  const history = useHistory();

  const handleLogout = () => {
    // Clear the token or any authentication data from localStorage
    localStorage.removeItem("token");

    // Redirect to the login page
    history.push("/login");
  };

  return (
    <a href="#" onClick={handleLogout} className="link-light">
      Log-out
    </a>
  );
};

export default LogOut;
