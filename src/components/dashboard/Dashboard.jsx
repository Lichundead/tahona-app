import "./Dashboard.css";
import { useAuth } from "../../context/AuthContext";
import { KPIS } from "../../data/mockData";

const Dashboard = () => {
  const { user } = useAuth();
  const nombreCorto = user.nombre.split(" ")[0];

  return (
    <div className="content">
      <header>
        <h1>Bienvenida {nombreCorto}</h1>
        <p>Aquí está el resumen del día</p>
        <div className="user-profile">👤 {user.nombre}</div>
      </header>

      <div className="kpi-grid">
        {KPIS.map(({ id, titulo, valor, tendencia, positiva, destacada }) => (
          <div key={id} className={`card kpi ${destacada ? "dark" : ""}`}>
            <h3>{titulo}</h3>
            <div className="number">{valor}</div>
            <div className={`trend ${positiva ? "positive" : "negative"}`}>
              {positiva ? "↗" : "↘"} {tendencia}
            </div>
          </div>
        ))}
      </div>

      <div className="charts-grid">
        <div className="card chart-main">
          <h4>Resumen</h4>
          <div className="fake-chart-lines">
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
