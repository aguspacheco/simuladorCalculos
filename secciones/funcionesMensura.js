import {
  porcentajePreferencial,
  valoresMensura,
  modulos,
} from "./constantes.js";

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
  // Si hay parcelas agregar el valor modular de las parcelas multiplicado por la cantidad de parcelas
  if (parcelas != 0) total += parcelasValorModular(parcelas) * parcelas;
  // Si es preferencial agregar el porcentaje preferencial al total
  if (preferencial) total *= 1 + porcentajePreferencial / 100;

  return Math.round(total * 100) / 100;
}

function totalPreferencial(
  parcelas,
  ddjj,
  funcional,
  cementerio,
  estudio,
  estadoParcelario
) {
  // Calcular el total inicial sumando los valores de los módulos multiplicados por la cantidad.
  let total =
    ddjj * valoresMensura[0] +
    funcional * valoresMensura[1] +
    cementerio * valoresMensura[2] +
    estadoParcelario * valoresMensura[3] +
    estudio * valoresMensura[4];
  // Si hay parcelas, agregar el valor modular de las parcelas multiplicado por la cantidad de parcelas.
  if (parcelas != 0) total += parcelasValorModular(parcelas) * parcelas;
  // Calcular el total preferencial multiplicando el total por el porcentaje preferencial.
  return (total * porcentajePreferencial) / 100;
}

/**
 * CREA UNA TABLA CON LOS RESULTADOS DE CADA ELEMENTO CON SUS CANTIDADES Y VALORES MODULADRES Y LA AGREGA A LA SECCION RESULTADOS.
 * @param {object} datosEntrada - Un objeto con los valoresd entrada que ingreso el usuario.
 */
function creaTablaResultados(datosEntrada) {
  const {
    origen,
    resultante,
    ddjj,
    funcional,
    cementerio,
    estadoParcelario,
    estudio,
    preferencial,
    parcelas,
  } = datosEntrada;
  const valor_modulo_parcelas = parcelasValorModular(parcelas);

  agregarFila(
    "Parcelas origen",
    origen,
    valor_modulo_parcelas,
    resultadosMensura
  );

  agregarFila(
    "Parcelas resultantes",
    resultante,
    valor_modulo_parcelas,
    resultadosMensura
  );

  agregarFila(
    "Unidades funcionales",
    funcional,
    valoresMensura[1],
    resultadosMensura
  );

  agregarFila("Cementerio", cementerio, valoresMensura[2], resultadosMensura);

  agregarFila(
    "Estudio de titulo y antecedente dominal",
    estudio,
    valoresMensura[4],
    resultadosMensura
  );

  agregarFila(
    "Verificación estado parcelario",
    estadoParcelario,
    valoresMensura[3],
    resultadosMensura
  );

  agregarFila(
    "Declaraciones juradas",
    ddjj,
    valoresMensura[0],
    resultadosMensura
  );

  const precioPreferencial = preferencial
    ? totalPreferencial(
        parcelas,
        ddjj,
        funcional,
        cementerio,
        estadoParcelario,
        estudio,
        valoresMensura,
        modulos
      )
    : 0;

  agregarFilaPreferencial(
    "Preferencial",
    preferencial,
    precioPreferencial,
    resultadosMensura
  );
}

export function abrirVentanaMensura() {
  var ventanaEmergente = document.getElementById("popUpMensura");
  ventanaEmergente.style.display = "block";
}
