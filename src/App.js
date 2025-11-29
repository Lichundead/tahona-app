import React, { useState } from "react";
import "./App.css";

// --- IMPORTACIONES DE COMPONENTES (Estructura Modular) ---
import Login from "./components/auth/Login";
import Sidebar from "./components/layout/Sidebar";
import Dashboard from "./components/dashboard/Dashboard";
import Stock from "./components/inventory/Stock";
import Resumen from "./components/reports/Resumen";
import Informes from "./components/reports/Informes";

function App() {
  const [session, setSession] = useState(false);

  const [view, setView] = useState("dashboard");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleLogout = () => {
    setSession(false);
    setView("dashboard");
    setIsSidebarOpen(false);
  };

  if (!session) {
    return <Login onLogin={() => setSession(true)} />;
  }

  return (
    <div className="app-layout">
      <Sidebar
        setView={setView}
        currentView={view}
        onLogout={handleLogout}
        isOpen={isSidebarOpen}
        closeSidebar={() => setIsSidebarOpen(false)}
      />

      <main className="main-content">
        {view === "dashboard" && (
          <Dashboard toggleSidebar={() => setIsSidebarOpen(true)} />
        )}

        {view === "stock" && <Stock setView={setView} />}

        {view === "resumen" && <Resumen setView={setView} />}

        {view === "informes" && <Informes setView={setView} />}
      </main>
    </div>
  );
}

export default App;
