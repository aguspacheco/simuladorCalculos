import {
  porcentajePreferencial,
  resultadosMensura,
  resultadosValuaciones,
} from "./constantes.js";

import { crearTablaMensura } from "./funcionesMensura.js";
// import { crearTablaValuaciones } from "./funcionesValuaciones.js";

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
 * Agrega una fila a la tabla de resultados con la informacion de datos ingresados, cantidad, valor modular, y valor total.
 * @param {string} etiqueta - La etiqueta de la fila.
 * @param {number} cantidad  - La cantidad que se ingreso en el formulario.
 * @param {number} valorModular - El valor modular de cada elemento que hay en la fila.
 */
export function agregarFila(etiqueta, cantidad, valorModular, total, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
          <th class = "texto-izquierda">${etiqueta}</th> 
          <td>${cantidad}</td>
          <td>${formatoPesoArgentino(valorModular)}</td>
          <td>${formatoPesoArgentino(total)}</td>
          `;
  tabla.appendChild(fila);
}

export function agregarFilaPreferencial(etiqueta, preferencial, monto, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
      <th class = "texto-izquierda">${etiqueta}</th>
      <td>${preferencial ? "Si✔" : "No"}</td> 
      <td>${preferencial ? porcentajePreferencial : 0}%</td>
      <td>${formatoPesoArgentino(monto)}</td>
      `;
  tabla.appendChild(fila);
}
/**
 * Cierra la ventana emergente y esconde la tabla.
 */

export function obtenerDatosFormulario(formularioId) {
  var formulario = document.getElementById(formularioId);
  var inputs = formulario.getElementsByTagName("input");
  var datos = [];

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var valores = input.type === "checkbox" ? input.checked : +input.value;
    datos.push(valores);
  }
  return datos;
}

/**
 * Abre la ventana emergente de la mensura.
 */
export function abrirPopUp(tipo) {
  var ventanaEmergente = document.getElementById(`popUp${tipo}`);
  ventanaEmergente.style.display = "block";
}
export function cerrarPopUp(tipo) {
  var ventana = document.getElementById(`popUp${tipo}`);
  ventana.style.display = "none";
  resultadosMensura.innerHTML = "";
  resultadosValuaciones.innerHTML = "";
  calculosMensura.style.display = "block";
  calculosValuaciones.style.display = "block";
}

export function mostrarTotal(clase) {
  var datosEntrada = obtenerDatosFormulario(`formulario${clase}`);
  crearTablaMensura(clase, datosEntrada);
}
