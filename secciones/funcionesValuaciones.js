import {
  resultadosValuaciones,
  valoresValuaciones,
  titulosValuaciones as titulo,
} from "./constantes.js";
import {
  agregarFila,
  formatoPesoArgentino,
  calcularTotal,
} from "./funcionesGlobales.js";

export function crearTablaValuaciones(clase, entrada) {
  const datosValuaciones = valoresValuaciones.slice();

  const elementosValuaciones = entrada.concat(datosValuaciones);
  let suma = 0;

  titulo.forEach((titulo, index) => {
    const cantidad = elementosValuaciones[index];
    let totalValuaciones = calcularTotal(
      index,
      cantidad,
      suma,
      valoresValuaciones
    );
    agregarFila(
      titulo,
      cantidad,
      valoresValuaciones[index].valor || valoresValuaciones[index].porcentaje,
      totalValuaciones,
      resultadosValuaciones
    );
    suma += totalValuaciones;
  });

  const contenedor = document.getElementById(`abonar${clase}`);
  contenedor.textContent = formatoPesoArgentino(suma);
}
