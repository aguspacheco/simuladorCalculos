import {
  formularioMensura,
  calcularBtnMensura,
  calcularBtnValuaciones,
  borrarBtnMensura,
  volverBtnMensura,
} from "./constantes.js";

/**
 * Calcula los resultados en la tabla y esconde el formulario y muestra el boton de borrar y volver.
 */
export function calcularMensura() {
  document.getElementById("contenedorMensura").style.display = "none";
  document.getElementById("borrar-btn").style.display = "none";
  tablaMensura.style.display = "none";
  calcularBtnMensura.style.display = "none";
}

/**
 * Vuelve al formulario.
 */
export function volverMensura() {
  resultadosMensura.innerHTML = "";
  tablaMensura.style.display = "none";
  formularioMensura.style.display = "block";
  document.getElementById("borrar-btn").style.display = "inline-block";
  volverBtnMensura.style.display = "none";
  calcularBtnMensura.style.display = "inline-block";
}

/**
 * Borra los datos del formulario.
 */
export function borrarMensura() {
  const datos = [
    "origen",
    "resultante",
    "ufuncional",
    "ddjj",
    "estadoParcelario",
    "estudio",
    "cementerio",
    "preferencialMensura",
  ];
  datos.forEach((datos) => {
    document.getElementById(datos).value = "";
    document.getElementById("preferencialMensura").checked = false;
  });
}
export function calcularValuaciones() {
  document.getElementById("contenedorValuaciones").style.display = "none";
  document.getElementById("borrar-btnValuaciones").style.display = "none";
  tablaValuaciones.style.display = "table";
  calcularBtnValuaciones.style.display = "none";
}

export function borrarValuaciones() {
  const elementos = [
    "declaracionesJuradas",
    "valoresFiscales",
    "valuacionFiscal",
    "ganadera",
    "vir",
    "preferencialValuaciones",
  ];
  elementos.forEach((elementos) => {
    document.getElementById(elementos).value = "";
    document.getElementById("preferencialValuaciones").checked = false;
  });
}
