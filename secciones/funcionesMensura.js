import {
  valoresMensura,
  modulos,
  resultadosMensura,
  titulosMensura as titulo,
} from "./constantes.js";
import {
  agregarFila,
  formatoPesoArgentino,
  calcularTotal,
  agregarFilaPreferencial,
} from "./funcionesGlobales.js";

function getModuloUbicado(parcelas) {
  return modulos.find((modulo) => {
    const [min, max] = modulo.rango;
    return parcelas >= min && parcelas <= max;
  });
}

function calcularValorParcelas(parcelas) {
  const moduloUbicado = getModuloUbicado(parcelas);
  return moduloUbicado ? moduloUbicado.valor : 0;
}

export function crearTablaMensura(clase, entrada) {
  const parcelas = entrada[0] + entrada[1];
  const valorParcelas = calcularValorParcelas(parcelas);

  const valor = { valor: valorParcelas };
  valoresMensura.unshift(valor, valor);

  let sumaTotal = 0;

  titulo.forEach((titulo, index) => {
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

  const totalidad = document.getElementById(`abonar${clase}`);
  totalidad.textContent = formatoPesoArgentino(sumaTotal);

  valoresMensura.splice(0, 2);
}
