/**
 * CONSTANTES GENERALES.
 */
export const multiplicador = 2.5; //Indice para calcular los montos.
export const porcentajePreferencial = 500; //Porcentaje preferencial.

/**
 * CONSTANTES PARA LOS BOTONES Y FORMUALRIOS.
 */

export const calculosMensura = document.getElementById("calculosMensura");
export const calculosValuaciones = document.getElementById(
  "calculosValuaciones"
);
export const tablaValuaciones = document.getElementById("tablaValuaciones");
export const tablaMensura = document.getElementById("tablaMensura");

/**
 * CONSTANTES MENSURA
 */
export const modulos = [
  { rango: [0, 5], valor: 750 * multiplicador },
  { rango: [6, 20], valor: 625 * multiplicador },
  { rango: [21, 50], valor: 550 * multiplicador },
  { rango: [51, Infinity], valor: 500 * multiplicador },
];

/**VALOR MODULAR DDJJ */
const precioDdjj = 200 * multiplicador;
/**VALOR MODULAR UNIDAD FUNCIONAL */
const precioUnidadFuncional = 500 * multiplicador;
/**VALOR MODULAR CEMENTERIO */
const precioCementerio = 100 * multiplicador;
/**VALOR MODULAR ESTADO PARCELARIO */
const precioParcelario = 1500 * multiplicador;
/**VALOR MODULAR POR ESTUDIO DE ANTECEDENTES */
const precioEstudio = 700 * multiplicador;
/**VALOR MODULAR VALOR FISCAL */
const precioValoresFiscal = 600 * multiplicador;
/**VALOR MODULAR VALUACION FISCAL */
const precioValuacionFiscal = 500 * multiplicador;
/**VALOR MODULAR RECEPTIVIDAD GANADERA */
const precioReceptividadGanadera = 500 * multiplicador;
/**VALOR MODULAR DE VIR */
const precioVir = 700 * multiplicador;

export const valoresMensura = [
  precioDdjj,
  precioUnidadFuncional,
  precioCementerio,
  precioParcelario,
  precioEstudio,
];

export const valoresValuaciones = [
  precioDdjj,
  precioValoresFiscal,
  precioValuacionFiscal,
  precioReceptividadGanadera,
  precioVir,
];
