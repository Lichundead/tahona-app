import PageHeader from "../common/PageHeader";
import BackButton from "../common/BackButton";
import DataTable from "../common/DataTable";
import Pagination from "../common/Pagination";
import { useNavigation } from "../../context/NavigationContext";
import { VIEWS } from "../../constants/views";
import { RESUMEN_PRODUCTOS } from "../../data/mockData";

const COLUMNS = [
  { key: "nombre", header: "Producto", className: "fw-bold" },
  { key: "entradas", header: "Entradas" },
  { key: "salidas", header: "Salidas" },
  { key: "valor", header: "Valor Unitario" },
  { key: "fecha", header: "Fecha", className: "text-muted" },
  { key: "id", header: "ID" },
  { key: "acciones", header: "", className: "dots", render: () => "..." },
];

const Resumen = () => {
  const { navigate } = useNavigation();

  return (
    <div className="report-page">
      <PageHeader title="Resumen de Productos" />
      <BackButton />

      <div className="table-card">
        <div className="table-toolbar">
          <button
            type="button"
            className="btn-add-dark"
            onClick={() => navigate(VIEWS.STOCK)}
          >
            + Añadir Producto
          </button>

          <div className="toolbar-actions">
            <button type="button" className="btn-outline">Exportar datos ▼</button>
            <button type="button" className="btn-outline">Clasificar por: ID ▼</button>
          </div>
        </div>

        <DataTable columns={COLUMNS} rows={RESUMEN_PRODUCTOS} />
        <Pagination />
      </div>
    </div>
  );
};

export default Resumen;
