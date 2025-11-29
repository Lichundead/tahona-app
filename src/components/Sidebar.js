import React from "react";
import "./Sidebar.css";

// Recibimos onLogout como prop
const Sidebar = ({ setView, onLogout }) => {
  return (
    <div className="sidebar">
      <h3 className="logo">Pastelería Tahona</h3>
      <nav>
        <div className="nav-item" onClick={() => setView("dashboard")}>
          🔳 General
        </div>
        <div className="nav-item">
          ✉️ Mensajes <span className="badge">2</span>
        </div>
        <div className="nav-group">
          <div className="nav-item active">🛍️ Productos</div>
          <div className="sub-nav" onClick={() => setView("stock")}>
            - Salidas e ingresos
          </div>
          <div className="sub-nav" onClick={() => setView("resumen")}>
            - Resumen
          </div>
        </div>
        <div className="nav-item" onClick={() => setView("informes")}>
          📄 Informes
        </div>
        <div className="nav-item mt-auto">⚙️ Ajustes</div>
      </nav>

      {/* Agregamos el evento onClick */}
      <div className="logout" onClick={onLogout}>
        ↪ Log out
      </div>
    </div>
  );
};

export default Sidebar;
