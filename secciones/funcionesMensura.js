import { valoresMensura, modulos, resultadosMensura } from "./constantes.js";
import { agregarFila, formatoPesoArgentino } from "./funcionesGlobales.js";

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
 * Calcula el total preferencial en base a los datos de entrada y los valores de mensura.
 * @param {Array} entrada - Los datos de entrada.
 * @returns {number} El total preferencial calculado.
 */
function totalPreferencialMensura(entrada) {
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
export function crearTablaMensura(clase, entrada) {
  const parcela = entrada[0] + entrada[1];
  const valorParcelas = parcelasValorModular(parcela);
  const datosMensura = valoresMensura.slice();
  datosMensura.unshift(valorParcelas, valorParcelas);

  const titulos = [
    "Parcelas origen",
    "Parcelas resultantes",
    "Declaraciones juradas",
    "Unidades funcionales",
    "Cementerio",
    "Estudio de titulo y antecedente dominal",
    "Verificacion estado parcelario",
    "Preferencial",
  ];

  const elementosMensura = entrada.concat(datosMensura);
  let sumaTotal = 0;

  titulos.forEach((titulo, index) => {
    const valorModular = datosMensura[index];
    const cantidad = elementosMensura[index];
    let total = valorModular * cantidad;
    agregarFila(titulo, cantidad, valorModular, total, resultadosMensura);

    sumaTotal += total;
  });
  const contenedor = document.getElementById(`abonar${clase}`);
  contenedor.textContent = formatoPesoArgentino(sumaTotal);
}
