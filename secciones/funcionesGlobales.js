import {
  porcentajePreferencial,
  valoresMensura,
  valoresValuaciones,
  modulos,
} from "./constantes.js";

/**
 * CAMBIA EL VALOR DE UNA CADENA CON EL FORMATO PESO ARGENTINO.
 * @param {Number} monto -El monto a cambiar de formato
 * @returns {String} -El monto cambiado como cadena con el formato de peso argentino.
 */
export function formatoPesoArgentino(monto) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    currencyDisplay: "symbol",
  }).format(monto);
}

/**
 * Se ve el total que tiene que pagar el usuario en la pagina.
 * @param {Number} total - El total que se tiene que pagar.
 * @param {Number} abonar - El contenedor del total.
 */
export function verTotal(total, abonar) {
  const contenedor = document.getElementById(abonar);
  contenedor.textContent = formatoPesoArgentino(total);
}

/**
 * Agrega una fila a la tabla de resultados con la informacion de datos ingresados, cantidad, valor modular, y valor total.
 * @param {string} etiqueta - La etiqueta de la fila.
 * @param {number} cantidad  - La cantidad que se ingreso en el formulario.
 * @param {number} valorModular - El valor modular de cada elemento que hay en la fila.
 */
export function agregarFila(etiqueta, cantidad, valorModular, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
        <th class = "texto-izquierda">${etiqueta}</th> 
        <td>${cantidad}</td>
        <td>${formatoPesoArgentino(valorModular)}</td>
        <td>${formatoPesoArgentino(valorModular * cantidad)}</td>
        `;
  tabla.appendChild(fila);
}

export function agregarFilaPreferencial(etiqueta, preferencial, monto, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <th class = "texto-izquierda">${etiqueta}</th>
    <td>${preferencial ? "Si" : "No"}</td> 
    <td>${preferencial ? porcentajePreferencial : 0}%</td>
    <td>${formatoPesoArgentino(monto)}</td>
    `;
  tabla.appendChild(fila);
}
export function mostrarTotalMensura() {
  const datosEntrada = recibirDatosEntrada();
  const total = calcularTotal(datosEntrada);
  creaTablaResultados(datosEntrada);
  verTotal(total, "abonarMensura");
}

export function mostrarTotalValuaciones() {
  const datosEntrada = recibirDatosEntradaValuaciones();
  const total = calcularTotalValuaciones(datosEntrada);
  creaTablaResultadosValuaciones(datosEntrada);
  verTotal(total, "abonarValuaciones");
}

/**
 * RECIBE LOS VALORES DE ENTRADA QUE SON INGRESADOS  POR EL USUARIO EN EL FORMULARIO.
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
  estadoParcelario,
  valoresMensura
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
export function tomarValoresEntrada() {
  const ddjj =
    parseInt(document.getElementById("declaracionesJuradas").value) || 0;
  const valoresFiscales =
    parseInt(document.getElementById("valoresFiscales").value) || 0;
  const valuacionFiscal =
    parseInt(document.getElementById("valuacionFiscal").value) || 0;
  const ganadera = parseInt(document.getElementById("ganadera").value) || 0;
  const vir = parseInt(document.getElementById("vir").value) || 0;
  const preferencial = document.getElementById(
    "preferencialValuaciones"
  ).checked;

  return {
    ddjj,
    valoresFiscales,
    valuacionFiscal,
    ganadera,
    vir,
    preferencial,
  };
}

function calcularValuaciones({
  ddjj,
  valoresFiscales,
  valuacionFiscal,
  ganadera,
  vir,
}) {
  let total =
    ddjj * valoresValuaciones[0] +
    valoresFiscales * valoresValuaciones[1] +
    valuacionFiscal * valoresValuaciones[2] +
    ganadera * valoresFiscales[3] +
    vir * valoresFiscales[4];

  if (preferencial) total *= 1 + porcentajePreferencial / 100;

  return total;
}

function PreferencialValuaciones(
  ddjj,
  valoresFiscales,
  valuacionFiscal,
  ganadera,
  vir,
  valoresValuaciones
) {
  let total =
    ddjj * valoresValuaciones[0] +
    valoresFiscales * valoresValuaciones[1] +
    valuacionFiscal * valoresValuaciones[2] +
    ganadera * valoresValuaciones[3] +
    vir * valoresFiscales[4];

  return (total * porcentajePreferencial) / 100;
}

function TablaValuaciones(valoresEntrada) {
  const { ddjj, valoresFiscales, valuacionFiscal, ganadera, vir } =
    valoresEntrada;

  agregarFila(
    "Declaraciones juradas",
    ddjj,
    valoresValuaciones[0],
    resultadosValuaciones
  );

  agregarFila(
    "Valores fiscales",
    valoresFiscales,
    valoresValuaciones[1],
    resultadosValuaciones
  );

  agregarFila(
    "Valuación fiscal",
    valuacionFiscal,
    valoresValuaciones[2],
    resultadosValuaciones
  );

  agregarFila(
    "Receptividad ganadera",
    ganadera,
    valoresValuaciones[3],
    resultadosValuaciones
  );

  agregarFila(
    "Reconsidereación de vir",
    valoresValuaciones[4],
    resultadosValuaciones
  );
}

// const precioPreferencialValuaciones = preferencial
//   ? totalPreferencial(
  
// )
