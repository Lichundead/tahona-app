// Datos simulados. Reemplazar por llamadas a la API cuando exista backend.

export const PRODUCTOS = ["Harina", "Huevos", "Azúcar"];

export const KPIS = [
  {
    id: "stock",
    titulo: "Stock Total",
    valor: "1.450",
    tendencia: "+15.6%",
    positiva: true,
    destacada: true,
  },
  {
    id: "ingresos",
    titulo: "Ingresos",
    valor: "1.239",
    tendencia: "+12.7%",
    positiva: true,
  },
  {
    id: "salidas",
    titulo: "Salidas",
    valor: "963",
    tendencia: "-12.7%",
    positiva: false,
  },
];

export const RESUMEN_PRODUCTOS = [
  { id: "39842-231", nombre: "Harina", entradas: 12, salidas: 67, valor: "$2 999.00", fecha: "20 Ene, 2024" },
  { id: "39842-231", nombre: "Huevos", entradas: 44, salidas: 67, valor: "$2 999.00", fecha: "22 Feb, 2024" },
  { id: "39842-231", nombre: "Azúcar", entradas: 5, salidas: 7, valor: "$2 999.00", fecha: "22 Feb, 2024" },
  { id: "39842-231", nombre: "Fécula", entradas: 6, salidas: 5, valor: "$2 999.00", fecha: "22 Feb, 2024" },
  { id: "39842-231", nombre: "Salvado", entradas: 6, salidas: 6, valor: "$2 999.00", fecha: "22 Feb, 2024" },
];

export const INFORMES_PRODUCTOS = [
  { id: "39842-231", producto: "Harina", unidades: 300, fecha: "20 Ene, 2023 - 20 Ene, 2024" },
  { id: "39842-231", producto: "Huevos", unidades: 100, fecha: "22 Feb, 2023 - 22 Feb, 2024" },
  { id: "39842-231", producto: "Azúcar", unidades: 30, fecha: "22 Feb, 2023 - 22 Feb, 2024" },
  { id: "39842-231", producto: "Fécula", unidades: 70, fecha: "22 Feb, 2023 - 22 Feb, 2024" },
  { id: "39842-231", producto: "Salvado", unidades: 10, fecha: "22 Feb, 2023 - 22 Feb, 2024" },
  { id: "39842-231", producto: "Leche", unidades: 50, fecha: "22 Feb, 2023 - 22 Feb, 2024" },
];
