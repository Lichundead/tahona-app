import { VIEWS } from "./views";

export const TOP_NAV = [
  { view: VIEWS.DASHBOARD, label: "🔳 General" },
  { view: VIEWS.MENSAJES, label: "✉️ Mensajes", badge: 2 },
];

export const PRODUCT_NAV = [
  { view: VIEWS.STOCK, label: "↳ Salidas e ingresos" },
  { view: VIEWS.RESUMEN, label: "↳ Resumen" },
];

export const BOTTOM_NAV = [
  { view: VIEWS.INFORMES, label: "📄 Informes" },
  { view: VIEWS.AJUSTES, label: "⚙️ Ajustes" },
];
