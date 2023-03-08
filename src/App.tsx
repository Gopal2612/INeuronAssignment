import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Details from "./pages/Details"
import VariableDetail from "./pages/VariableDetail";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Dashboard />}/>
          <Route path="/details/:id" element={<Details/>}/>
          <Route path="/variable/:variableId/:criteriaIndex/:id" element={<VariableDetail/>}/>
      </Routes>
  );
}

export default App;
