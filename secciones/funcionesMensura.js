import {
  porcentajePreferencial,
  valoresMensura,
  modulos,
  formularioValuaciones,
  tablaMensura,
  formularioMensura,
} from "./constantes.js";

import {
  agregarFila,
  agregarFilaPreferencial,
  verTotal,
} from "./funcionesGlobales.js";
export function mostrarTotalMensura() {
  const datosEntrada = recibirDatosEntrada();
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
 * RECIBE LOS VALORES DE ENTRADA QUE SON INGRESADOS POR EL USUARIO EN EL FORMULARIO.
 * @returns {Object} -Un objeto con los valores que ingreso el usuario en el formulario.
 */
export function recibirDatosEntrada() {
  const origen = parseInt(document.getElementById("origen").value) || 0;
  const resultante = parseInt(document.getElementById("resultante").value) || 0;
  const ddjj = parseInt(document.getElementById("ddjj").value) || 0;
  const estudio = parseInt(document.getElementById("estudio").value) || 0;
  const funcional = parseInt(document.getElementById("ufuncional").value) || 0;
  const cementerio = parseInt(document.getElementById("cementerio").value) || 0;
  const estadoParcelario =
    parseInt(document.getElementById("estadoParcelario").value) || 0;
  const preferencial = document.getElementById("preferencialMensura").checked;
  const parcelas = origen + resultante;
  return {
    origen,
    resultante,
    ddjj,
    estudio,
    funcional,
    cementerio,
    estadoParcelario,
    preferencial,
    parcelas,
  };
}

/**
 * Calcula el total que debe pagar segun los valores que el usuario ingreso.
 * @param {Object} datosEntrada - Es un objeto con los valores ingreso por el usuario.
 * @returns {Number} - El total a pagar segun los valores ingresados por el usuario.
 */
function calcularTotal({
  parcelas,
  ddjj,
  preferencial,
  funcional,
  cementerio,
  estudio,
  estadoParcelario,
}) {
  // Calcular el total inicial sumando los valores de los módulos multiplicados por la cantidad.
  let total =
    ddjj * valoresMensura[0] +
    funcional * valoresMensura[1] +
    cementerio * valoresMensura[2] +
    estadoParcelario * valoresMensura[3] +
    estudio * valoresMensura[4];
  total +=
    cementerio * valoresMensura[3] * parcelas * funcional * valoresMensura[1];
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
  formularioValuaciones.style.display = "none";
  ventanaEmergente.style.display = "block";
}

export function cerrarMensura() {
  tablaMensura.style.display = "none";
  formularioMensura.style.display = "inline-block";
  formularioValuaciones.style.display = "inline-block";
  cerrar.style.display = "none";
}
