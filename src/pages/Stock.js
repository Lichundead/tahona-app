import React from "react";
import "./Stock.css";

const Stock = () => (
  <div className="content">
    <h1>Stock de Productos</h1>
    <div className="stock-container">
      <div className="card stock-action green-border">
        <h3>Ingreso de producto</h3>
        <input placeholder="[Producto]" />
        <input placeholder="Ingrese la cantidad" />
        <button className="btn-green">Ingresar</button>
      </div>
      <div className="card stock-action red-border">
        <h3>Salida de Producto</h3>
        <input placeholder="[Producto]" />
        <input placeholder="Ingrese la cantidad" />
        <button className="btn-red">Ingresar</button>
      </div>
    </div>
  </div>
);

export default Stock;
