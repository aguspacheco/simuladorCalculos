import { crearTablaMensura } from "./funcionesMensura.js";
import { crearTablaValuaciones } from "./funcionesValuaciones.js";

// Cambia el valor de el total al formato de moneda en pesos argentinos.
export function formatoPesoArgentino(monto) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    currencyDisplay: "symbol",
  }).format(monto);
}

// Agrega una fila a la tabla de resultados
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

// Agrega una fila a la tabla de resultados para elementos preferenciales
export function agregarFilaPreferencial(
  etiqueta,
  preferencial,
  porcentaje,
  monto,
  tabla
) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <th class="texto-izquierda">${etiqueta}</th>
    <td>${preferencial ? "Si✔" : "No"}</td> 
    <td>${preferencial ? porcentaje : 0}%</td>
    <td>${formatoPesoArgentino(monto)}</td>
  `;
  tabla.appendChild(fila);
}

// Abre la ventana emergente de la tabla
export function abrirPopUp(tipo) {
  const ventanaEmergente = document.getElementById(`popUp${tipo}`);
  ventanaEmergente.style.display = "block";
}

// Cierra la ventana emergente y muestra nuevamente el formulario
export function cerrarPopUp(tipo) {
  const ventana = document.getElementById(`popUp${tipo}`);
  ventana.style.display = "none";
  const formulario = document.getElementById(`formulario${tipo}`);
  const inputs = formulario.getElementsByTagName("input");

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    if (input.type === "checkbox") {
      input.checked = false;
    } else {
      input.value = "";
    }
  }

  resultadosMensura.innerHTML = "";
  resultadosValuaciones.innerHTML = "";
  calculosMensura.style.display = "block";
  calculosValuaciones.style.display = "block";
}

// Calcula el total
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

// Funciones para crear las tablas
const funcionesTabla = {
  Mensura: crearTablaMensura,
  Valuaciones: crearTablaValuaciones,
};

// Muestra los resultados totales en la tabla
export function mostrarTotal(clase) {
  const formulario = document.getElementById(`formulario${clase}`);
  const inputs = formulario.getElementsByTagName("input");
  const datosEntrada = [];

  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i];
    const valores = input.type === "checkbox" ? input.checked : +input.value;
    datosEntrada.push(valores);
  }

  const armarTabla = funcionesTabla[clase];

  if (armarTabla) {
    armarTabla(clase, datosEntrada);
  }
}
