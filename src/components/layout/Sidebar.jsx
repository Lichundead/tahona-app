import { useState } from "react";
import "./Sidebar.css";
import { useAuth } from "../../context/AuthContext";
import { useNavigation } from "../../context/NavigationContext";
import { TOP_NAV, PRODUCT_NAV, BOTTOM_NAV } from "../../constants/navigation";

const NavItem = ({ label, badge, isActive, onClick }) => (
  <div className={`nav-item ${isActive ? "active" : ""}`} onClick={onClick}>
    {label}
    {badge != null && <span className="badge">{badge}</span>}
  </div>
);

const Sidebar = () => {
  const { logout } = useAuth();
  const { view, navigate, isSidebarOpen, openSidebar, closeSidebar } =
    useNavigation();
  const [isProductsOpen, setIsProductsOpen] = useState(
    PRODUCT_NAV.some((item) => item.view === view)
  );

  return (
    <>
      <div
        className={`sidebar-overlay ${isSidebarOpen ? "active" : ""}`}
        onClick={closeSidebar}
      />
      {!isSidebarOpen && (
        <button className="mobile-tab-toggle" onClick={openSidebar}>➤</button>
      )}

      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <h3 className="logo">Pastelería Tahona</h3>
          <button className="close-btn" onClick={closeSidebar}>×</button>
        </div>

        <nav>
          {TOP_NAV.map((item) => (
            <NavItem
              key={item.view}
              label={item.label}
              badge={item.badge}
              isActive={view === item.view}
              onClick={() => navigate(item.view)}
            />
          ))}

          <div className="nav-group">
            <div
              className="nav-group-header"
              onClick={() => setIsProductsOpen((open) => !open)}
            >
              <span>🛍️ Productos</span>
              <span className={`arrow-icon ${isProductsOpen ? "rotate" : ""}`}>▼</span>
            </div>

            {isProductsOpen && (
              <div className="nav-group-content">
                {PRODUCT_NAV.map((item) => (
                  <div
                    key={item.view}
                    className={`sub-nav ${view === item.view ? "active" : ""}`}
                    onClick={() => navigate(item.view)}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {BOTTOM_NAV.map((item) => (
            <NavItem
              key={item.view}
              label={item.label}
              isActive={view === item.view}
              onClick={() => navigate(item.view)}
            />
          ))}
        </nav>

        <div className="logout" onClick={logout}>↪ Log out</div>
      </aside>
    </>
  );
};

export default Sidebar;
