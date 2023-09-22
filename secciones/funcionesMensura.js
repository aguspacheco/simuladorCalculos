import {
  valoresMensura,
  modulos,
  resultadosMensura,
  titulosMensura as titulos,
} from "./constantes.js";
import {
  agregarFila,
  formatoPesoArgentino,
  calcularTotal,
  agregarFilaPreferencial,
} from "./funcionesGlobales.js";

//Funcion para encontrar el modulo basado en enla cantidad de parcelas
function getModuloUbicado(parcelas) {
  return modulos.find((modulo) => {
    const [min, max] = modulo.rango;
    return parcelas >= min && parcelas <= max;
  });
}

//Funcion para calcular el valor de las parcelas segun el modulo.
function calcularValorParcelas(parcelas) {
  const moduloUbicado = getModuloUbicado(parcelas);
  return moduloUbicado ? moduloUbicado.valor : 0;
}

//Funcion principal que crea la tabla de Mensura.
export function crearTablaMensura(clase, entrada) {
  const parcelas = entrada[0] + entrada[1];
  const valorParcelas = calcularValorParcelas(parcelas);

  const valor = { valor: valorParcelas };
  valoresMensura.unshift(valor, valor);

  let sumaTotal = 0;

  titulos.forEach((titulo, index) => {
    const cantidad = entrada[index];
    let totalMensura = calcularTotal(
      index,
      cantidad,
      sumaTotal,
      valoresMensura
    );

    if (valoresMensura[index].porcentaje) {
      agregarFilaPreferencial(
        titulo,
        entrada[index],
        valoresMensura[index].porcentaje,
        totalMensura,
        resultadosMensura
      );
    } else {
      agregarFila(
        titulo,
        cantidad,
        valoresMensura[index].valor,
        totalMensura,
        resultadosMensura
      );
    }

    sumaTotal += totalMensura;
  });

  //Actualiza el contenido delelemento HTML con el total.
  const totalidad = document.getElementById(`abonar${clase}`);
  totalidad.textContent = formatoPesoArgentino(sumaTotal);

  //Elimina los dos primeros elementos del array de valoresMensura.
  valoresMensura.splice(0, 2);
}
