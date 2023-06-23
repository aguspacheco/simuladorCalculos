import { porc_preferencial } from "./constantes"; //IMPORTE PREFERNECIAL DEL ARCHIVO CONSTANTES.

/**
 * CAMBIA EL MONTO EN UNA CADENA CON EL FORMATO DE MONEDA ARGENTINA.
 * @param {Number} importe - El importe cambiado de formato.
 * @returns {String} - El importe cambiado a cadena con el formato de moneda Argentina.
 */
function formatoMoneda(importe) {
  const formatter = new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "simbol",
    minimumFractionDigits: "2",
    maximumSignificantDigits: "2",
  });
  return formatter.format(importe);
}

/**
 * OBSERVA EL IMPORTE A PAGAR EN LA PAGINA WEB.
 * @param {Number} total - total que paga.
 * @param {Number} pagar - contiene el total.
 */
function observarTotal(total, pagar) {
  const contenedor = document.getElementById(pagar);
  contenedor.innerHTML = formatoMoneda(total);
}

/**
 * AGREGA UNA FILA A LA TABLA DE RESULTADOS.
 * @param {string} marca - La marca de la fila.
 * @param {Number} cantidad - La cantidad ingresada por el usuario.
 * @param {Number} valorModular - El valor modular de cada elemento que hay en la fila.
 */
function incluirFila(marca, cantidad, valorModular, tabla) {
  const fila = document.createElemen("tr");
  fila.innerHTML = `
        <th class = "texto-izquierda">${marca}</th>
        <td>${cantidad}</td>
        <td>${formatoMoneda(valorModular)}</td>
        <td>${formatoMoneda(valorModular * cantidad)}</td>
        `;
  tabla.appendChild(fila);
}

/**
 * AGREGA LA FILA DE PREFERENCIAL
 */
function incluirFilaPreferencial(preferencial, pagar, tabla) {
  const fila = document.createElemen("tr");
  fila.innerHTML = `
        <th class ="texto-izquierda">Preferencial</th>
        <td>${preferencial ? "Si" : "No"}</td>
        <td>${preferencial ? porc_preferencial : 0}%</td>
        <td>${formatoMoneda(valorModular)}</td>
        `;
  tabla.appendChild(fila);
}
