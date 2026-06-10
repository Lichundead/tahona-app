import { lazy } from "react";
import { VIEWS } from "../constants/views";
import PlaceholderPage from "../components/common/PlaceholderPage";

// Las vistas se cargan bajo demanda (code splitting).
const Dashboard = lazy(() => import("../components/dashboard/Dashboard"));
const Stock = lazy(() => import("../components/inventory/Stock"));
const Resumen = lazy(() => import("../components/reports/Resumen"));
const Informes = lazy(() => import("../components/reports/Informes"));

export const VIEW_COMPONENTS = {
  [VIEWS.DASHBOARD]: Dashboard,
  [VIEWS.MENSAJES]: PlaceholderPage,
  [VIEWS.STOCK]: Stock,
  [VIEWS.RESUMEN]: Resumen,
  [VIEWS.INFORMES]: Informes,
  [VIEWS.AJUSTES]: PlaceholderPage,
};
