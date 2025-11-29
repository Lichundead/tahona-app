import React, { useState } from "react";
import "./App.css";

import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import Stock from "./pages/Stock";
import Resumen from "./pages/Resumen";
import Informes from "./pages/Informes"; // <--- 1. IMPORTAR

function App() {
  const [session, setSession] = useState(false);
  const [view, setView] = useState("dashboard");

  const handleLogout = () => {
    setSession(false);
    setView("dashboard");
  };

  if (!session) {
    return <Login onLogin={() => setSession(true)} />;
  }

  return (
    <div className="app-layout">
      {/* Sidebar controla la navegación */}
      <Sidebar setView={setView} onLogout={handleLogout} />

      <main>
        {view === "dashboard" && <Dashboard />}
        {view === "stock" && <Stock />}
        {view === "resumen" && <Resumen setView={setView} />}
        {/* 2. AGREGAR LA VISTA DE INFORMES */}
        {view === "informes" && <Informes setView={setView} />}
      </main>
    </div>
  );
}

export default App;
