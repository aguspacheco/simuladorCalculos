import { porcentajePreferencial } from "./constantes.js";
import { crearTablaMensura } from "./funcionesMensura.js";
import { crearTablaValuaciones } from "./funcionesValuaciones.js";

/**
 * Cambia el valor de el total al formato de moneda en pesos argentinos.
 * @param {Number} monto - El monto a cambiar de formato.
 * @returns {String} - El monto cambiado como cadena con el formato de peso argentino.
 */
export function formatoPesoArgentino(monto) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    currencyDisplay: "symbol",
  }).format(monto);
}

/**
 * Agrega una fila a la tabla de resultados con la información de datos ingresados, cantidad, valor modular y valor total.
 * @param {string} etiqueta - La etiqueta de la fila.
 * @param {number} cantidad - La cantidad que se ingresó en el formulario.
 * @param {number} valorModular - El valor modular de cada elemento que hay en la fila.
 * @param {number} total - El valor total calculado para la fila.
 * @param {HTMLElement} tabla - La tabla donde se agregará la fila.
 */
export function agregarFila(etiqueta, cantidad, valorModular, total, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <th class="texto-izquierda">${etiqueta}</th> 
    <td>${cantidad}</td>
    <td>${formatoPesoArgentino(valorModular)}</td>
    <td>${formatoPesoArgentino(total)}</td>
  `;
  tabla.appendChild(fila);
}

/**
 * Agrega una fila a la tabla de resultados con la información de datos ingresados, cantidad, valor modular y valor total, para elementos preferenciales.
 * @param {string} etiqueta - La etiqueta de la fila.
 * @param {boolean} preferencial - Indica si el elemento es preferencial o no.
 * @param {number} monto - El monto para el elemento.
 * @param {HTMLElement} tabla - La tabla donde se agregará la fila.
 */
export function agregarFilaPreferencial(etiqueta, preferencial, monto, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <th class="texto-izquierda">${etiqueta}</th>
    <td>${preferencial ? "Si✔" : "No"}</td> 
    <td>${preferencial ? porcentajePreferencial : 0}%</td>
    <td>${formatoPesoArgentino(monto)}</td>
  `;
  tabla.appendChild(fila);
}

/**
 * Abre la ventana emergente de la tabla según el tipo de formulario indicado.
 * @param {string} tipo - El tipo de ventana que se abre.
 */
export function abrirPopUp(tipo) {
  const ventanaEmergente = document.getElementById(`popUp${tipo}`);
  ventanaEmergente.style.display = "block";
}

/**
 * Cierra la ventana emergente y muestra nuevamente el formulario.
 * @param {string} tipo - El tipo de ventana que se cierra.
 */
export function cerrarPopUp(tipo) {
  const ventana = document.getElementById(`popUp${tipo}`);
  ventana.style.display = "none";
  resultadosMensura.innerHTML = "";
  resultadosValuaciones.innerHTML = "";
  calculosMensura.style.display = "block";
  calculosValuaciones.style.display = "block";
}

export function calcularTotal(index, cantidad, suma, valores) {
  let total = 0;

  if (valores[index].valor) {
    total = valores[index].valor * cantidad;
  }

  if (valores[index].porcentaje) {
    total = cantidad ? suma * (valores[index].porcentaje / 100) : 0;
  }

  return total;
}

/**
 * Muestra los resultados totales en la tabla.
 * @param {string} clase - La clase para la cual se calcula y se muestran los resultados.
 */
export function mostrarTotal(clase) {
  const formulario = document.getElementById(`formulario${clase}`);
  const inputs = formulario.getElementsByTagName("input");
  const datosEntrada = [];

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const valores = input.type === "checkbox" ? input.checked : +input.value;
    datosEntrada.push(valores);
  }

  if (clase === "Mensura") {
    crearTablaMensura(clase, datosEntrada);
  } else {
    crearTablaValuaciones(clase, datosEntrada);
  }
}
