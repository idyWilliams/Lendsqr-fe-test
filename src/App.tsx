import React from "react";
import "./App.scss";
import AuthenticationLayout from "./layout/Auth/AuthenticationLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DashboardLayout from "./layout/Dashboard/DashboardLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route>
          <Route path="/" element={<AuthenticationLayout title={"sided"} />} />
          <Route path="/dashboard" element={<DashboardLayout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
