import PageHeader from "../common/PageHeader";
import BackButton from "../common/BackButton";
import DataTable from "../common/DataTable";
import Pagination from "../common/Pagination";
import { INFORMES_PRODUCTOS } from "../../data/mockData";

const COLUMNS = [
  { key: "producto", header: "Producto", className: "fw-bold" },
  { key: "unidades", header: "Unidades Utilizadas", className: "text-center" },
  { key: "fecha", header: "Fecha", className: "text-muted" },
  { key: "id", header: "ID" },
];

const Informes = () => (
  <div className="report-page">
    <PageHeader title="Informes de productos" />
    <BackButton />

    <div className="table-card">
      <div className="table-toolbar">
        <div className="toolbar-actions">
          <button type="button" className="btn-outline">Exportar datos ▼</button>
          <button type="button" className="btn-outline">Clasificar por: ID ▼</button>
        </div>
      </div>

      <DataTable columns={COLUMNS} rows={INFORMES_PRODUCTOS} zebra />
      <Pagination />
    </div>
  </div>
);

export default Informes;
