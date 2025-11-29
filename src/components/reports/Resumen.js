import React from "react";
import "./Resumen.css";

const Resumen = ({ setView }) => {
  // Datos simulados
  const productos = [
    {
      nombre: "Harina",
      entradas: 12,
      salidas: 67,
      valor: "$2 999.00",
      fecha: "20 Ene, 2024",
      id: "39842-231",
    },
    {
      nombre: "Huevos",
      entradas: 44,
      salidas: 67,
      valor: "$2 999.00",
      fecha: "22 Feb, 2024",
      id: "39842-231",
    },
    {
      nombre: "Azúcar",
      entradas: 5,
      salidas: 7,
      valor: "$2 999.00",
      fecha: "22 Feb, 2024",
      id: "39842-231",
    },
    {
      nombre: "Fécula",
      entradas: 6,
      salidas: 5,
      valor: "$2 999.00",
      fecha: "22 Feb, 2024",
      id: "39842-231",
    },
    {
      nombre: "Salvado",
      entradas: 6,
      salidas: 6,
      valor: "$2 999.00",
      fecha: "22 Feb, 2024",
      id: "39842-231",
    },
  ];

  return (
    <div className="report-page">
      <header className="report-header">
        <h1>Resumen de Productos</h1>
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
        <div className="table-toolbar">
          <button className="btn-add-dark" onClick={() => setView("stock")}>
            + Añadir Producto{" "}
          </button>

          <div className="toolbar-actions">
            <button className="btn-outline">Exportar datos ▼</button>
            <button className="btn-outline">Clasificar por: ID ▼</button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Producto</th>
                <th>Entradas</th>
                <th>Salidas</th>
                <th>Valor Unitario</th>
                <th>Fecha</th>
                <th>ID</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {productos.map((item, index) => (
                <tr key={index}>
                  <td className="fw-bold">{item.nombre}</td>
                  <td>{item.entradas}</td>
                  <td>{item.salidas}</td>
                  <td>{item.valor}</td>
                  <td className="text-muted">{item.fecha}</td>
                  <td>{item.id}</td>
                  <td className="dots">...</td>
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

export default Resumen;
