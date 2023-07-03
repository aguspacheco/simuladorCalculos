/**
 * CONSTANTES GENERALES
 */
const multiplicador = 2.5; //Indice para calcular los montos
const porcentajePreferencial = 500; //Porcentaje preferencial

/**
 * CONSTANTES MENSURA
 */
export const modulos = [
  { rango: [0, 5], valor: 750 * multiplicador },
  { rango: [6, 20], valor: 625 * multiplicador },
  { rango: [21, 50], valor: 550 * multiplicador },
  { rango: [51, Infinity], valor: 500 * multiplicador },
];

/**
 * CONSTANTES VALORES MODULARES
 */
const precioDdjj = 200 * multiplicador;
const precioUnidadFuncional = 500 * multiplicador;
const precioCementerio = 100 * multiplicador;
const precioParcelario = 1500 * multiplicador;
const precioEstudio = 700 * multiplicador;
const precioVir = 700 * multiplicador;
const precioValorFiscal = 600 * multiplicador;
const precioValuacioFiscal = 500 * multiplicador;
const precioGanadera = 500 * multiplicador;

/**
 * CONSTANTES FORMULARIO MENSURA
 */
const formularioMensura = document.getElementById("formularioMensura");
const resultadosMensura = document.getElementById("resultadosMensura");
const tablaMensura = document.getElementById("tablaMensura");

/**
 * CONSTANTES FORMULARIO VALUACIONES
 */
const formularioValuaciones = document.getElementById("formularioValuaciones");
const resultadosValuaciones = document.getElementById("resultadosValuaciones");
const tablaValuaciones = document.getElementById("tablaValuaciones");

export const valoresMensura = [
  precioDdjj,
  precioUnidadFuncional,
  precioCementerio,
  precioParcelario,
  precioEstudio,
  porcentajePreferencial,
];

export const valoresValuaciones = [
  precioVir,
  precioValorFiscal,
  precioValuacioFiscal,
  precioGanadera,
  porcentajePreferencial,
];
