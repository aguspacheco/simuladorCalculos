import {
  resultadosValuaciones,
  valoresValuaciones,
  titulosValuaciones as titulo,
} from "./constantes.js";
import {
  agregarFila,
  formatoPesoArgentino,
  calcularTotal,
  agregarFilaPreferencial,
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

    if (valoresValuaciones[index].porcentaje) {
      agregarFilaPreferencial(
        titulo,
        entrada[index],
        valoresValuaciones[index].porcentaje,
        totalValuaciones,
        resultadosValuaciones
      );
    } else {
      agregarFila(
        titulo,
        cantidad,
        valoresValuaciones[index].valor,
        totalValuaciones,
        resultadosValuaciones
      );
    }

    suma += totalValuaciones;
  });

  const contenedor = document.getElementById(`abonar${clase}`);
  contenedor.textContent = formatoPesoArgentino(suma);
}
