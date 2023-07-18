import { valoresMensura, modulos } from "./constantes.js";
import {
  agregarFila,
  agregarFilaPreferencial,
  verTotal,
  obtenerDatosFormulario,
} from "./funcionesGlobales.js";

/**
 * Muestra el total de la mensura en la tabla generada.
 */
export function mostrarTotalMensura() {
  const datosEntrada = obtenerDatosFormulario("formularioMensura");
  const total = calcularTotal(datosEntrada);
  creaTablaResultados(datosEntrada);
  verTotal(total, "abonarMensura");
}

/**
 * DEVUELVE EL VALOR MODULAR QUE CORRESPONDE A LA CANTIDAD DE PARCELAS INGRESADAS.
 * @param {Number} parcelas - La cantidad de parcelas que se ingresan.
 * @returns {Number} - El valor modular que se corresponde a la cantidad de parcelas ingresdas.
 */
function parcelasValorModular(parcelas) {
  const moduloUbicado = modulos.find((modulo) => {
    const [min, max] = modulo.rango;
    return parcelas >= min && parcelas <= max;
  });
  return moduloUbicado ? moduloUbicado.valor : 0;
}

/**
 * Calcula el total que debe pagar segun los valores que el usuario ingreso.
 * @param {Object} datosEntrada - Es un objeto con los valores ingreso por el usuario.
 * @returns {Number} - El total a pagar segun los valores ingresados por el usuario.
 */
function calcularTotal(entrada) {
  let total =
    entrada[3] * valoresMensura[0] +
    entrada[2] * valoresMensura[1] +
    entrada[6] * valoresMensura[2] +
    entrada[4] * valoresMensura[3] +
    entrada[5] * valoresMensura[4];
  total +=
    entrada[6] *
    entrada[3] *
    entrada[0] *
    entrada[1] *
    entrada[2] *
    valoresMensura[1];
  const parcelas = entrada[0] + entrada[1];
  if (parcelas != 0) total += parcelasValorModular(parcelas) * parcelas;
  if (entrada[7]) total *= 1 + valoresMensura[5] / 100;

  return Math.round(total * 100) / 100;
}

/**
 * Calcula el total preferencial en base a los datos de entrada y los valores de mensura.
 * @param {Array} entrada - Los datos de entrada.
 * @returns {number} El total preferencial calculado.
 */
function totalPreferencial(entrada) {
  let total =
    entrada[0] * valoresMensura[0] +
    entrada[2] * valoresMensura[1] +
    entrada[6] * valoresMensura[2] +
    entrada[4] * valoresMensura[3] +
    entrada[5] * valoresMensura[4];
  const parcelas = entrada[0] + entrada[1];
  if (parcelas != 0) total += parcelasValorModular(parcelas) * parcelas;

  return (total * valoresMensura[5]) / 100;
}

/**
 * Crea una tabla de resultados con los datos de entrada y los valores de mensura.
 * @param {Array} entrada - Los datos de entrada.
 */
function creaTablaResultados(entrada) {
  const parcela = entrada[0] + entrada[1];
  const valorParcelas = parcelasValorModular(parcela);
  const datosMensura = valoresMensura.slice();
  datosMensura.unshift(valorParcelas, valorParcelas);

  agregarFila(
    "Parcelas resultantes",
    entrada[1],
    datosMensura[1],
    resultadosMensura
  );

  agregarFila(
    "Unidades funcionales",
    entrada[2],
    datosMensura[3],
    resultadosMensura
  );

  agregarFila("Cementerio", entrada[6], datosMensura[4], resultadosMensura);

  agregarFila(
    "Estudio de titulo y antecedente dominal",
    entrada[5],
    datosMensura[6],
    resultadosMensura
  );

  agregarFila(
    "Verificación estado parcelario",
    entrada[4],
    datosMensura[5],
    resultadosMensura
  );

  agregarFila(
    "Declaraciones juradas",
    entrada[3],
    datosMensura[2],
    resultadosMensura
  );

  const precioPreferencial = datosMensura ? totalPreferencial(entrada) : 0;

  agregarFilaPreferencial(
    "Preferencial",
    entrada[7],
    precioPreferencial,
    resultadosMensura
  );
}
