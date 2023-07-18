import { valoresMensura, modulos } from "./constantes.js";

import {
  agregarFila,
  agregarFilaPreferencial,
  verTotal,
  obtenerDatosFormulario,
} from "./funcionesGlobales.js";
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
  // Calcular el total inicial sumando los valores de los módulos multiplicados por la cantidad.
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
  // Si hay parcelas agregar el valor modular de las parcelas multiplicado por la cantidad de parcelas
  if (parcelas != 0) total += parcelasValorModular(parcelas) * parcelas;
  // Si es preferencial agregar el porcentaje preferencial al total
  if (entrada[7]) total *= 1 + valoresMensura[5] / 100;

  return Math.round(total * 100) / 100;
}

function totalPreferencial(entrada) {
  // Calcular el total inicial sumando los valores de los módulos multiplicados por la cantidad.
  let total =
    entrada[0] * valoresMensura[0] +
    entrada[2] * valoresMensura[1] +
    entrada[6] * valoresMensura[2] +
    entrada[4] * valoresMensura[3] +
    entrada[5] * valoresMensura[4];
  const parcelas = entrada[0] + entrada[1];
  // Si hay parcelas, agregar el valor modular de las parcelas multiplicado por la cantidad de parcelas.
  if (parcelas != 0) total += parcelasValorModular(parcelas) * parcelas;
  // Calcular el total preferencial multiplicando el total por el porcentaje preferencial.
  return (total * valoresMensura[5]) / 100;
}

/**
 * CREA UNA TABLA CON LOS RESULTADOS DE CADA ELEMENTO CON SUS CANTIDADES Y VALORES MODULADRES Y LA AGREGA A LA SECCION RESULTADOS.
 * @param {object} datosEntrada - Un objeto con los valoresd entrada que ingreso el usuario.
 */
function creaTablaResultados(entrada) {
  entrada.forEach((valor, Indice) => {});

  const parcela = entrada[0] + entrada[1];
  const valorParcelas = parcelasValorModular(parcela);
  const datosMensura = valoresMensura.slice();
  datosMensura.unshift(valorParcelas, valorParcelas);

  console.log(datosMensura);

  agregarFila("Parcelas origen", entrada[0], datosMensura, resultadosMensura);

  agregarFila(
    "Parcelas resultantes",
    entrada[1],
    datosMensura,
    resultadosMensura
  );

  agregarFila(
    "Unidades funcionales",
    entrada[2],
    datosMensura,
    resultadosMensura
  );

  agregarFila("Cementerio", entrada[6], datosMensura, resultadosMensura);

  agregarFila(
    "Estudio de titulo y antecedente dominal",
    entrada[5],
    datosMensura,
    resultadosMensura
  );

  agregarFila(
    "Verificación estado parcelario",
    entrada[4],
    datosMensura,
    resultadosMensura
  );

  agregarFila(
    "Declaraciones juradas",
    entrada[3],
    datosMensura,
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

export function abrirVentanaMensura() {
  var ventanaEmergente = document.getElementById("popUpMensura");
  ventanaEmergente.style.display = "block";
}
