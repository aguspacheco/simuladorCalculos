import { porc_preferencial } from "./constantes"; //IMPORTE PREFERNECIAL DEL ARCHIVO CONSTANTES.
import { multiplicador } from "./constantes"; //INDICE PARA CÁLCULAR LOS MONTOS.

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
  return moduloUbicado.valor * multiplicador;
}

/**
 * RECIBE LOS VALORES DE ENTRADA QUE SON INGRESADOS  POR EL USUARIO EN EL FORMULARIO.
 * @returns {Object} -Un objeto con los valores que ingreso el usuario en el formulario.
 */
function recibirValoresEntrada() {
  const origen = parseInt(document.getElementById("origen").value) || 0;
  const resultante = parseInt(document.getElementById("resultante").value) || 0;
  const ddjj = parseInt(document.getElementById("ddjj").value || 0);
  const estudio = parseInt(document.getElementById("estudio").value || 0);
  const funcional = parseInt(document.getElementById("funcional").value || 0);
  const cementerio = parseInt(document.getElementById("cementerio").value || 0);
}
