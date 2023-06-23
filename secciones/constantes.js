/**
 * CONSTANTES GENERALES
 */
export const multiplicador = 2.5; //Indice para calcular los montos
export const porc_preferencial = 500; //Porcentaje preferencial

/**
 * CONSTANTES MENSURA
 */
const modulos = [
  { rango: [0, 5], valor: 750 },
  { rango: [6, 20], valor: 625 },
  { rango: [21, 50], valor: 550 },
  { rango: [51, Infinity], valor: 500 },
];

/**
 * CONSTANTES VALORES MODULARES
 */
const valor_modulo_ddjj = 200 * multiplicador;
const valor_modulo_ufuncional = 500 * multiplicador;
const valor_modulo_cementerio = 100 * multiplicador;
const valor_modulo_parcelario = 1500 * multiplicador;
const valor_modulo_estudio = 700 * multiplicador;
const valor_modulo_vir = 700 * multiplicador;
const valor_modulo_valor_fiscal = 600 * multiplicador;
const valor_modulo_valuacion_fiscal = 500 * multiplicador;
const valor_modulo_ganadera = 500 * multiplicador;

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
