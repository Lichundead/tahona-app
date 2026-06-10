import "./Stock.css";
import PageHeader from "../common/PageHeader";
import BackButton from "../common/BackButton";
import { PRODUCTOS } from "../../data/mockData";

const StockForm = ({ type }) => {
  const isEntry = type === "entry";

  return (
    <form
      className={`stock-card ${isEntry ? "green-accent" : "red-accent"}`}
      onSubmit={(event) => event.preventDefault()}
    >
      <h2>{isEntry ? "Ingreso de producto" : "Salida de Producto"}</h2>

      <div className="form-group">
        <label htmlFor={`producto-${type}`}>Buscar producto</label>
        <select id={`producto-${type}`} className="custom-select">
          <option>[Producto]</option>
          {PRODUCTOS.map((producto) => (
            <option key={producto}>{producto}</option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label htmlFor={`cantidad-${type}`}>Ingrese la cantidad</label>
        <input
          id={`cantidad-${type}`}
          type="number"
          className="custom-input"
          placeholder="0"
        />
      </div>

      <button type="submit" className={`btn-action ${isEntry ? "btn-green" : "btn-red"}`}>
        Ingresar
      </button>
    </form>
  );
};

const Stock = () => (
  <div className="report-page">
    <PageHeader title="Stock de Productos" searchPlaceholder="🔍 Buscar..." />
    <BackButton />

    <div className="stock-actions-grid">
      <StockForm type="entry" />
      <StockForm type="exit" />
    </div>
  </div>
);

export default Stock;
