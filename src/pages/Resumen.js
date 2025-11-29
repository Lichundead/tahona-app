import React from "react";
import "./Resumen.css";

const Resumen = ({ setView }) => {
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
    <div className="content">
      <header>
        <h1>Resumen de Productos</h1>
      </header>

      <div className="top-bar-aligned">
        <div className="left-group">
          <button
            className="btn-back-dark"
            onClick={() => setView("dashboard")}
          >
            ← Regresar
          </button>
        </div>

        <div className="right-group">
          <input type="search" placeholder="Buscar" className="search-pill" />
        </div>
      </div>

      <div className="table-card">
        {/* Barra de herramientas de la tabla */}
        <div className="table-toolbar">
          <button className="btn-add-product" onClick={() => setView("stock")}>
            + Añadir Producto
          </button>
          <div className="toolbar-actions">
            <button className="btn-outline">Exportar datos</button>
            <button className="btn-outline">Clasificar por: ID</button>
          </div>
        </div>

        {/* Tabla de Datos */}
        <table className="product-table">
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
                <td style={{ fontWeight: "bold" }}>{item.nombre}</td>
                <td>{item.entradas}</td>
                <td>{item.salidas}</td>
                <td>{item.valor}</td>
                <td>{item.fecha}</td>
                <td>{item.id}</td>
                <td className="actions-cell">...</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginación */}
        <div className="pagination">
          <span className="page-item">1</span>
          <span className="page-item active">2</span>
          <span className="page-item">3</span>
          <span className="page-item">...</span>
          <span className="page-item">20</span>
        </div>
      </div>
    </div>
  );
};

export default Resumen;
