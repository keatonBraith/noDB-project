import React from "react";
import "./App.css";
import "./reset.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <footer>&copy;Copyright 2020 Keaton Braithwaite, LLC</footer>
    </div>
  );
}

export default App;
