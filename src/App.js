import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import APITutorial from "./components/APITutorial";
import MainNavigation from "./components/MainNavigation";
import APIDocumentation from "./components/APIDocumentation";

const App = () => {
  return (
    <Router>
      <div className="App">
        <MainNavigation />
        <Routes>
          <Route exact={true} path="/" element={<Home />} />
          <Route
            exact={true}
            path="/:apiName/reference"
            element={<APIDocumentation />}
          />
          <Route
            exact={true}
            path="/:apiName/tutorial"
            element={<APITutorial />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
