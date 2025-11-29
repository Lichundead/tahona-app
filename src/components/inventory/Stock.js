import React from "react";
import "./Stock.css";

const Stock = ({ setView }) => {
  return (
    <div className="stock-page">
      <header className="stock-header">
        <h1>Stock de Productos</h1>
        <div className="header-right">
          <input
            type="search"
            placeholder="🔍 Buscar..."
            className="search-pill"
          />
        </div>
      </header>

      <div className="back-container">
        <button className="btn-back-dark" onClick={() => setView("dashboard")}>
          ← Regresar
        </button>
      </div>

      <div className="stock-actions-grid">
        <div className="stock-card green-accent">
          <h2>Ingreso de producto</h2>

          <div className="form-group">
            <label>Buscar producto</label>
            <select className="custom-select">
              <option>[Producto]</option>
              <option>Harina</option>
              <option>Huevos</option>
              <option>Azúcar</option>
            </select>
          </div>

          <div className="form-group">
            <label>Ingrese la cantidad</label>
            <input type="number" className="custom-input" placeholder="0" />
          </div>

          <button className="btn-action btn-green">Ingresar</button>
        </div>

        <div className="stock-card red-accent">
          <h2>Salida de Producto</h2>

          <div className="form-group">
            <label>Buscar producto</label>
            <select className="custom-select">
              <option>[Producto]</option>
              <option>Harina</option>
              <option>Huevos</option>
              <option>Azúcar</option>
            </select>
          </div>

          <div className="form-group">
            <label>Ingrese la cantidad</label>
            <input type="number" className="custom-input" placeholder="0" />
          </div>

          <button className="btn-action btn-red">Ingresar</button>
        </div>
      </div>
    </div>
  );
};

export default Stock;
