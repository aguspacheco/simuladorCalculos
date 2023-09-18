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
 * Un objeto que mapea los valores modulares a sus valores, multiplancado cada uno por 2,5.
 */
export const valoresMensura = [
  { valor: 500 }, //1.2 Valor modular unidad funcional.
  { valor: 200 }, // Valor modular ddjj.
  { valor: 100 }, //1.4 Valor modular cementerio.
  { valor: 1500 }, //1.8 Valor modular estado parcelario.
  { valor: 700 }, //1.8.1 Valor modular estudio de parcela.
  { porcentaje: porcentajePreferencial }, //Porcentaje preferencial
].map((monto) =>
  monto.valor ? { ...monto, valor: monto.valor * multiplicador } : monto
);

/**
 * Un objeto que mapea los modulares a sus valores, multiplancado cada uno por 2,5.
 */

export const valoresValuaciones = [
  { valor: 200 }, //3.2 valor declaraciones juradas.
  { valor: 600 }, //3.3 certificacion de valores fiscales.
  { valor: 500 }, //3.4 reconsideracion de valuacion fiscal.
  { valor: 500 }, //3.5 reconsideracion de receptividad ganadera.
  { valor: 700 }, //3.6 reconsideracion VIR.
  { porcentaje: porcentajePreferencial }, //Porcentaje preferencial.
].map((monto) =>
  monto.valor ? { ...monto, valor: monto.valor * multiplicador } : monto
);

/**
 * Arreglo de los titulos de valuaciones.
 */
export const titulosValuaciones = [
  "Declaraciónes juradas",
  "Certificación de valores fiscales de inmuebles",
  "Reconsideración de valuación fiscal",
  "Reconsideración de receptividad ganadera",
  "Reconsideración de VIR",
  "Preferencial",
];

/**
 * Arrglo de los titulos de mensura.
 */
export const titulosMensura = [
  "Parcelas origen",
  "Parcelas resultantes",
  "Unidades funcionales",
  "Declaraciones juradas",
  "Cementerio",
  "Estado parcelario",
  "Estudio de titulo y antecedentes",
  "Preferencial",
];
