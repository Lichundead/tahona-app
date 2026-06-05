import React from "react";
import "./Informes.css";

const Informes = ({ setView }) => {
  // Datos simulados para Informes
  const datosInformes = [
    {
      producto: "Harina",
      unidades: 300,
      fecha: "20 Ene, 2023 - 20 Ene, 2024",
      id: "39842-231",
    },
    {
      producto: "Huevos",
      unidades: 100,
      fecha: "22 Feb, 2023 - 22 Feb, 2024",
      id: "39842-231",
    },
    {
      producto: "Azúcar",
      unidades: 30,
      fecha: "22 Feb, 2023 - 22 Feb, 2024",
      id: "39842-231",
    },
    {
      producto: "Fécula",
      unidades: 70,
      fecha: "22 Feb, 2023 - 22 Feb, 2024",
      id: "39842-231",
    },
    {
      producto: "Salvado",
      unidades: 10,
      fecha: "22 Feb, 2023 - 22 Feb, 2024",
      id: "39842-231",
    },
    {
      producto: "Leche",
      unidades: 50,
      fecha: "22 Feb, 2023 - 22 Feb, 2024",
      id: "39842-231",
    },
  ];

  return (
    <div className="report-page">
      <header className="report-header">
        <h1>Informes de productos</h1>
        <div className="header-right">
          <input
            type="search"
            placeholder="🔍 Buscar"
            className="search-pill"
          />
        </div>
      </header>

      <div className="nav-bar">
        <button className="btn-back-dark" onClick={() => setView("dashboard")}>
          ← Regresar
        </button>
      </div>

      <div className="table-card">
        <div className="reports-toolbar">
          <div className="spacer"></div>

          <div className="toolbar-actions">
            <button className="btn-outline">Exportar datos ▼</button>
            <button className="btn-outline">Clasificar por: ID ▼</button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="custom-table reports-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Unidades Utilizadas</th>
                <th>Fecha</th>
                <th>ID</th>
              </tr>
            </thead>
            <tbody>
              {datosInformes.map((item, index) => (
                <tr key={index} className={index % 2 !== 0 ? "row-zebra" : ""}>
                  <td className="fw-bold">{item.producto}</td>
                  <td className="text-center">{item.unidades}</td>
                  <td className="text-muted">{item.fecha}</td>
                  <td>{item.id}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pagination-container">
          <div className="page-number">1</div>
          <div className="page-number active">2</div>
          <div className="page-number">3</div>
          <div className="page-number">4</div>
          <div className="page-number">5</div>
          <div className="page-number">...</div>
          <div className="page-number">20</div>
        </div>
      </div>
    </div>
  );
};

export default Informes;
