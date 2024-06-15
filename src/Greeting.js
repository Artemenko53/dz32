import React from "react";
import "./greeting.css";

function Greeting({ isAuthenticated, fullName }) {
  if (isAuthenticated) {
    return <h1>Ласкаво просимо, {fullName}!</h1>;
  } else {
    return <p>Будь ласка, увійдіть в обліковий запис.</p>;
  }
}

export default Greeting;
