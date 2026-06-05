import React, { useState } from "react";
import "./Sidebar.css";

const TOP_NAV = [
  { view: "dashboard", label: "🔳 General" },
  { view: "mensajes", label: "✉️ Mensajes", badge: 2 },
];

const PRODUCT_NAV = [
  { view: "stock", label: "↳ Salidas e ingresos" },
  { view: "resumen", label: "↳ Resumen" },
];

const BOTTOM_NAV = [
  { view: "informes", label: "📄 Informes" },
  { view: "ajustes", label: "⚙️ Ajustes" },
];

const Sidebar = ({ setView, onLogout, isOpen, openSidebar, closeSidebar, currentView }) => {
  const [isProductsOpen, setIsProductsOpen] = useState(
    currentView === "stock" || currentView === "resumen"
  );

  const navigate = (view) => {
    setView(view);
    closeSidebar();
  };

  return (
    <>
      <div
        className={`sidebar-overlay ${isOpen ? "active" : ""}`}
        onClick={closeSidebar}
      />
      {!isOpen && (
        <button className="mobile-tab-toggle" onClick={openSidebar}>➤</button>
      )}

      <aside className={`sidebar ${isOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3 className="logo">Pastelería Tahona</h3>
          <button className="close-btn" onClick={closeSidebar}>×</button>
        </div>

        <nav>
          {TOP_NAV.map(({ view, label, badge }) => (
            <div
              key={view}
              className={`nav-item ${currentView === view ? "active" : ""}`}
              onClick={() => navigate(view)}
            >
              {label}
              {badge && <span className="badge">{badge}</span>}
            </div>
          ))}

          <div className="nav-group">
            <div
              className="nav-group-header"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              <span>🛍️ Productos</span>
              <span className={`arrow-icon ${isProductsOpen ? "rotate" : ""}`}>▼</span>
            </div>

            {isProductsOpen && (
              <div className="nav-group-content">
                {PRODUCT_NAV.map(({ view, label }) => (
                  <div
                    key={view}
                    className={`sub-nav ${currentView === view ? "active" : ""}`}
                    onClick={() => navigate(view)}
                  >
                    {label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {BOTTOM_NAV.map(({ view, label }) => (
            <div
              key={view}
              className={`nav-item ${currentView === view ? "active" : ""}`}
              onClick={() => navigate(view)}
            >
              {label}
            </div>
          ))}
        </nav>

        <div className="logout" onClick={onLogout}>↪ Log out</div>
      </aside>
    </>
  );
};

export default Sidebar;
