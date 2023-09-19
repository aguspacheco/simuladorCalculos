import {
  resultadosValuaciones,
  valoresValuaciones,
  titulosValuaciones as titulo,
  valoresMensura,
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

    if (valoresMensura[index].porcentaje) {
      agregarFilaPreferencial(
        titulo,
        entrada[index],
        valoresMensura[index].porcentaje,
        totalValuaciones,
        resultadosValuaciones
      );
    } else {
      agregarFila(
        titulo,
        cantidad,
        valoresMensura[index].valor,
        totalValuaciones,
        resultadosValuaciones
      );
    }

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
