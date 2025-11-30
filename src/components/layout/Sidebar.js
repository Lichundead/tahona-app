import React, { useState } from "react";
import "./Sidebar.css";

const Sidebar = ({
  setView,
  onLogout,
  isOpen,
  openSidebar,
  closeSidebar,
  currentView,
}) => {
  const [isProductsOpen, setIsProductsOpen] = useState(
    currentView === "stock" || currentView === "resumen"
  );

  const toggleProducts = () => {
    setIsProductsOpen(!isProductsOpen);
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={closeSidebar}
      ></div>
      {!isOpen && (
        <button className="mobile-tab-toggle" onClick={openSidebar}>
          ➤
        </button>
      )}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3 className="logo">Pastelería Tahona</h3>
          <button className="close-btn" onClick={closeSidebar}>
            ×
          </button>
        </div>

        <nav>
          <div
            className={`nav-item ${
              currentView === "dashboard" ? "active" : ""
            }`}
            onClick={() => {
              setView("dashboard");
              closeSidebar();
            }}
          >
            🔳 General
          </div>

          <div
            className={`nav-item ${currentView === "mensajes" ? "active" : ""}`}
            onClick={() => {
              setView("mensajes");
              closeSidebar();
            }}
          >
            ✉️ Mensajes <span className="badge">2</span>
          </div>

          <div className="nav-group">
            <div className="nav-group-header" onClick={toggleProducts}>
              <span>🛍️ Productos</span>

              <span className={`arrow-icon ${isProductsOpen ? "rotate" : ""}`}>
                ▼
              </span>
            </div>

            {isProductsOpen && (
              <div className="nav-group-content">
                <div
                  className={`sub-nav ${
                    currentView === "stock" ? "active" : ""
                  }`}
                  onClick={() => {
                    setView("stock");
                    closeSidebar();
                  }}
                >
                  ↳ Salidas e ingresos
                </div>
                <div
                  className={`sub-nav ${
                    currentView === "resumen" ? "active" : ""
                  }`}
                  onClick={() => {
                    setView("resumen");
                    closeSidebar();
                  }}
                >
                  ↳ Resumen
                </div>
              </div>
            )}
          </div>

          <div
            className={`nav-item ${currentView === "informes" ? "active" : ""}`}
            onClick={() => {
              setView("informes");
              closeSidebar();
            }}
          >
            📄 Informes
          </div>

          <div
            className={`nav-item ${currentView === "ajustes" ? "active" : ""}`}
            onClick={() => {
              setView("ajustes");
              closeSidebar();
            }}
          >
            ⚙️ Ajustes
          </div>
        </nav>

        <div className="logout" onClick={onLogout}>
          ↪ Log out
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
