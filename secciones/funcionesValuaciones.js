import {
  resultadosValuaciones,
  valoresValuaciones,
  titulosValuaciones,
} from "./constantes.js";
import { agregarFila, formatoPesoArgentino } from "./funcionesGlobales.js";

export function crearTablaValuaciones(clase, entrada) {
  const datosValuaciones = valoresValuaciones.slice();

  const elementosValuaciones = entrada.concat(datosValuaciones);
  let suma = 0;

  titulosValuaciones.forEach((titulo, index) => {
    const valorModular = datosValuaciones[index];
    const cantidad = elementosValuaciones[index];
    let total = valorModular * cantidad;
    agregarFila(titulo, cantidad, valorModular, total, resultadosValuaciones);
    suma += total;
  });

  const contenedor = document.getElementById(`abonar${clase}`);
  contenedor.textContent = formatoPesoArgentino(suma);
}
