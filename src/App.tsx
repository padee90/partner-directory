import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import "./App.css";
import PartnerDirectoryDashboard from "./pages/PartnerDirectoryDashboard";
import AddNewPartner from "./pages/AddNewPartner";

function App() {
  return (
    <div className="app">
      <Header />{" "}
      <main className="main-content">
        <Routes>
          <Route path="/" element={<PartnerDirectoryDashboard />} />
          <Route path="/addNewPartner" element={<AddNewPartner />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
