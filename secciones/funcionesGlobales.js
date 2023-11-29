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

// Función para verificar si al menos un campo tiene valor
function hayValorIngresado() {
  const campos = document.querySelectorAll('input[type="number"]');
  for (let i = 0; i < campos.length; i++) {
    if (campos[i].value.trim() !== '') {
      return true; // Se encontró al menos un campo con valor
    }
  }
  return false; // Ningún campo tiene valor
}

// Muestra los resultados totales en la tabla
// Modifica la función mostrarTotal para incluir la verificación y alerta
// Modifica la función mostrarTotal para incluir la verificación y alerta
export function mostrarTotal(clase) {
  const formulario = document.getElementById(`formulario${clase}`);
  const inputs = formulario.getElementsByTagName("input");
  const datosEntrada = [];

  // Verificar si al menos un campo tiene valor
  if (!hayValorIngresado()) {
    alert('Debe ingresar al menos un valor antes de calcular el total.');
    // Ocultar la ventana emergente
    cerrarPopUp(clase);
    return;
  }

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




// Función para validar si un valor es positivo
function esPositivo(value) {

}

// Obtener referencia a los campos de entrada de tipo "number"
const camposNumero = document.querySelectorAll('input[type="number"]');

// Recorrer todos los campos de número
for (let i = 0; i < camposNumero.length; i++) {
  // Añadir un evento de entrada (input)
  camposNumero[i].addEventListener('input', function() {
    // Obtener el valor del campo de número
    const valor = this.value;

    // Validar si el valor es positivo
    if (valor < 0) {
      alert('Solo se aceptan números positivos, por favor ingrese otro valor');
      // Limpiar el campo de número
      this.value = '';
    }
  });
}
