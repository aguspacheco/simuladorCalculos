import {
  porcentajePreferencial,
  resultadosValuaciones,
  valoresValuaciones,
} from "./constantes.js";
import {
  agregarFila,
  agregarFilaPreferencial,
  formatoPesoArgentino,
} from "./funcionesGlobales.js";

function totalPreferencialValuaciones(entrada) {
  let total =
    entrada[0] * valoresValuaciones[0] +
    entrada[1] * valoresValuaciones[1] +
    entrada[2] * valoresValuaciones[2] +
    entrada[3] * valoresValuaciones[3] +
    entrada[4] * valoresValuaciones[4];

  return (total * valoresValuaciones[5]) / 100;
}

export function crearTablaValuaciones(clase, entrada) {
  const datosValuaciones = valoresValuaciones.slice();

  const titulos = [
    "Declaraciónes juradas",
    "Certificación de valores fiscales de inmuebles",
    "Reconsideración de valuación fiscal",
    "Reconsideración de receptividad ganadera",
    "Reconsideración de VIR",
    "Preferencial",
  ];

  const elementosValuaciones = entrada.concat(datosValuaciones);
  let suma = 0;

  titulos.forEach((titulo, index) => {
    const valorModular = datosValuaciones[index];
    const cantidad = elementosValuaciones[index];
    let total = valorModular * cantidad;
    agregarFila(titulo, cantidad, valorModular, total, resultadosValuaciones);
    suma += total;
  });

  const contenedor = document.getElementById(`abonar${clase}`);
  contenedor.textContent = formatoPesoArgentino(suma);
}
