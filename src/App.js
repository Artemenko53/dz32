import "./App.css";
import React, { useState } from "react";
import Greeting from "./Greeting";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [fullName, setFullName] = useState("");

  const handleLogin = () => {
    setIsAuthenticated(true);
    setFullName("Бред Пітт");
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setFullName("");
  };

  return (
    <div className="App">
      <Greeting isAuthenticated={isAuthenticated} fullName={fullName} />
      {isAuthenticated ? (
        <button onClick={handleLogout}>Вийти з облікового запису</button>
      ) : (
        <button onClick={handleLogin}>
          Login <FontAwesomeIcon icon={faRightToBracket} />
        </button>
      )}
    </div>
  );
}

export default App;
