import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="content">
      <header>
        <h1>Bienvenida María</h1>
        <p>Aquí está el resumen del día</p>
        <div className="user-profile">👤 María Ricaurte</div>
      </header>

      <div className="kpi-grid">
        <div className="card kpi dark">
          <h3>Stock Total</h3>
          <div className="number">1.450</div>
          <div className="trend positive">↗ +15.6%</div>
        </div>
        <div className="card kpi">
          <h3>Ingresos</h3>
          <div className="number">1.239</div>
          <div className="trend positive">↗ +12.7%</div>
        </div>
        <div className="card kpi">
          <h3>Salidas</h3>
          <div className="number">963</div>
          <div className="trend negative">↘ -12.7%</div>
        </div>
      </div>

      <div className="charts-grid">
        <div className="card chart-main">
          <h4>Resumen</h4>
          <div className="fake-chart-lines">
            {/* Simulación visual de gráfico */}
            <svg height="100" width="100%">
              <polyline
                points="0,80 50,40 100,60 150,20 200,50 300,10"
                fill="none"
                stroke="#333"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
        <div className="card chart-donut">
          <h4>Top Productos</h4>
          <div className="donut-circle">
            <span>+543</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
