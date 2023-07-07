import { porcentajePreferencial, valoresValuaciones } from "./constantes.js";
import {
  agregarFila,
  agregarFilaPreferencial,
  verTotal,
} from "./funcionesGlobales.js";

export function mostrarTotalValuaciones() {
  const datosIniciales = tomarValoresEntrada();
  const total = calcularValuaciones(datosIniciales);
  TablaValuaciones(datosIniciales);
  verTotal(total, "abonarValuaciones");
}

export function tomarValoresEntrada() {
  const ddjj =
    parseInt(document.getElementById("declaracionesJuradas").value) || 0;
  const valoresFiscales =
    parseInt(document.getElementById("valoresFiscales").value) || 0;
  const valuacionFiscal =
    parseInt(document.getElementById("valuacionFiscal").value) || 0;
  const ganadera = parseInt(document.getElementById("ganadera").value) || 0;
  const vir = parseInt(document.getElementById("vir").value) || 0;
  const preferencial = document.getElementById(
    "preferencialValuaciones"
  ).checked;

  return {
    ddjj,
    valoresFiscales,
    valuacionFiscal,
    ganadera,
    vir,
    preferencial,
  };
}

function calcularValuaciones({
  ddjj,
  valoresFiscales,
  valuacionFiscal,
  ganadera,
  vir,
}) {
  let total =
    ddjj * valoresValuaciones[0] +
    valoresFiscales * valoresValuaciones[1] +
    valuacionFiscal * valoresValuaciones[2] +
    ganadera * valoresValuaciones[3] +
    vir * valoresValuaciones[4];

  if (PreferencialValuaciones) total *= 1 + porcentajePreferencial / 100;

  return total;
}

function PreferencialValuaciones({
  ddjj,
  valoresFiscales,
  valuacionFiscal,
  ganadera,
  vir,
}) {
  let total =
    ddjj * valoresValuaciones[0] +
    valoresFiscales * valoresValuaciones[1] +
    valuacionFiscal * valoresValuaciones[2] +
    ganadera * valoresValuaciones[3] +
    vir * valoresValuaciones[4];

  return (total * porcentajePreferencial) / 100;
}

function TablaValuaciones(valoresEntrada) {
  const {
    ddjj,
    valoresFiscales,
    valuacionFiscal,
    ganadera,
    vir,
    preferencial,
  } = valoresEntrada;

  agregarFila(
    "Declaraciones juradas",
    ddjj,
    valoresValuaciones[0],
    resultadosValuaciones
  );

  agregarFila(
    "Valores fiscales",
    valoresFiscales,
    valoresValuaciones[1],
    resultadosValuaciones
  );

  agregarFila(
    "Valuación fiscal",
    valuacionFiscal,
    valoresValuaciones[2],
    resultadosValuaciones
  );

  agregarFila(
    "Receptividad ganadera",
    ganadera,
    valoresValuaciones[3],
    resultadosValuaciones
  );

  agregarFila(
    "Reconsidereación de vir",
    vir,
    valoresValuaciones[4],
    resultadosValuaciones
  );

  const precioPreferencialValuaciones = preferencial
    ? PreferencialValuaciones(valoresEntrada)
    : 0;

  agregarFilaPreferencial(
    "Preferencial",
    preferencial,
    precioPreferencialValuaciones,
    resultadosValuaciones
  );
}
