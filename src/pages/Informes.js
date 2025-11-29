import React from "react";
import "./Informes.css";

const Informes = ({ setView }) => {
  // Datos simulados según tu imagen
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
  ];

  return (
    <div className="content">
      <header>
        <h1>Informes Generales</h1>
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

        {/* Tabla de Informes */}
        <table className="reports-table">
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
              <tr
                key={index}
                className={index % 2 === 0 ? "row-even" : "row-odd"}
              >
                <td style={{ fontWeight: "bold" }}>{item.producto}</td>
                <td>{item.unidades}</td>
                <td className="date-cell">{item.fecha}</td>
                <td>{item.id}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Paginación */}
        <div className="pagination">
          <span className="page-item">1</span>
          <span className="page-item active">2</span>
          <span className="page-item">3</span>
          <span className="page-item">4</span>
          <span className="page-item">5</span>
          <span className="page-item">...</span>
          <span className="page-item">20</span>
        </div>
      </div>
    </div>
  );
};

export default Informes;
