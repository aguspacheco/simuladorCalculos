/**
 * CONSTANTES GENERALES.
 */
export const multiplicador = 2.5; // Indice para calcular los montos.
export const porcentajePreferencial = 500; // Porcentaje preferencial.

/**
 * CONSTANTES PARA LOS BOTONES Y FORMULARIOS.
 */
export const tablaValuaciones = document.getElementById("tablaValuaciones"); // Elemento de la tabla de valuaciones.
export const tablaMensura = document.getElementById("tablaMensura"); // Elemento de la tabla mensura.
export const resultadosMensura = document.getElementById("resultadosMensura"); // Elemento de los resultados de mensura.
export const resultadosValuaciones = document.getElementById(
  "resultadosValuaciones"
); // Elemento de los resultados de valuaciones.

/**
 * Una matriz de objetos que representa los módulos de mensura y cada objeto tiene un rango y un valor.
 */
export const modulos = [
  { rango: [0, 5], valor: 750 },
  { rango: [6, 20], valor: 625 },
  { rango: [21, 50], valor: 550 },
  { rango: [51, Infinity], valor: 500 },
].map((modulo) => ({ ...modulo, valor: modulo.valor * multiplicador }));

/**
 * Un objeto que mapea los nombres de los valores modulares a sus valores.
 */
const precios = {
  unidadFuncional: 500, //1.2 Valor modular unidad funcional.
  ddjj: 200, // Valor modular ddjj.
  cementerio: 100, //1.4 Valor modular cementerio.
  parcelario: 1500, //1.8 Valor modular estado parcelario.
  valoresFiscal: 600, //3.3 Valor modular valores fiscales.
  estudio: 700, //1.8.1 Valor modular estudio de parcela.
  valuacionFiscal: 500, //3.4 Valor modular valuacion fiscal.
  receptividadGanadera: 500, //3.5 Valor modular receptividad ganadera.
  vir: 700, //3.6 Valor modular vir.
};

/**
 *  Una matriz de valores modulares para mensura y los valores se calculan multiplicando el valor de cada valor modular por el índice.
 */
export const valoresMensura = [
  precios.ddjj,
  precios.unidadFuncional,
  precios.cementerio,
  precios.parcelario,
  precios.estudio,
  porcentajePreferencial,
].map((valor) => valor * multiplicador);

/**
 * Una matriz de valores modulares para valuaciones y los valores se calculan multiplicando el valor de cada valor modular modular por el indice.
 */
export const valoresValuaciones = [
  precios.ddjj,
  precios.valoresFiscal,
  precios.valuacionFiscal,
  precios.receptividadGanadera,
  precios.vir,
  porcentajePreferencial,
].map((valor) => valor * multiplicador);
