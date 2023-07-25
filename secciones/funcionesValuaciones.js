import { valoresValuaciones } from "./constantes.js";
import { agregarFila, agregarFilaPreferencial } from "./funcionesGlobales.js";

function totalPreferencialValuaciones(entrada) {
  let total =
    entrada[0] * valoresValuaciones[0] +
    entrada[1] * valoresValuaciones[1] +
    entrada[2] * valoresValuaciones[2] +
    entrada[3] * valoresValuaciones[3] +
    entrada[4] * valoresValuaciones[4];

  return (total * valoresValuaciones[5]) / 100;
}

export function crearTablaValuaciones(entrada) {
  agregarFila(
    "Declaraciones juradas",
    entrada[0],
    valoresValuaciones[0],
    resultadosValuaciones
  );

  agregarFila(
    "Valores fiscales",
    entrada[1],
    valoresValuaciones[1],
    resultadosValuaciones
  );

  agregarFila(
    "Valuación fiscal",
    entrada[2],
    valoresValuaciones[2],
    resultadosValuaciones
  );

  agregarFila(
    "Receptividad ganadera",
    entrada[3],
    valoresValuaciones[3],
    resultadosValuaciones
  );

  agregarFila(
    "Reconsidereación de vir",
    entrada[4],
    valoresValuaciones[4],
    resultadosValuaciones
  );

  const precioPreferencialValuaciones = entrada[5]
    ? totalPreferencialValuaciones(entrada)
    : 0;

  agregarFilaPreferencial(
    "Preferencial",
    entrada[5],
    precioPreferencialValuaciones,
    resultadosValuaciones
  );
}
