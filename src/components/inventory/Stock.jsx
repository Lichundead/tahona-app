import React from "react";
import "./Stock.css";

const PRODUCTS = ["Harina", "Huevos", "Azúcar"];

const StockForm = ({ type }) => {
  const isEntry = type === "entry";
  return (
    <div className={`stock-card ${isEntry ? "green-accent" : "red-accent"}`}>
      <h2>{isEntry ? "Ingreso de producto" : "Salida de Producto"}</h2>

      <div className="form-group">
        <label>Buscar producto</label>
        <select className="custom-select">
          <option>[Producto]</option>
          {PRODUCTS.map((p) => <option key={p}>{p}</option>)}
        </select>
      </div>

      <div className="form-group">
        <label>Ingrese la cantidad</label>
        <input type="number" className="custom-input" placeholder="0" />
      </div>

      <button className={`btn-action ${isEntry ? "btn-green" : "btn-red"}`}>
        Ingresar
      </button>
    </div>
  );
};

const Stock = ({ setView }) => {
  return (
    <div className="stock-page">
      <header className="stock-header">
        <h1>Stock de Productos</h1>
        <div className="header-right">
          <input type="search" placeholder="🔍 Buscar..." className="search-pill" />
        </div>
      </header>

      <div className="back-container">
        <button className="btn-back-dark" onClick={() => setView("dashboard")}>
          ← Regresar
        </button>
      </div>

      <div className="stock-actions-grid">
        <StockForm type="entry" />
        <StockForm type="exit" />
      </div>
    </div>
  );
};

export default Stock;
