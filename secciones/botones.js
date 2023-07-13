import { tablaMensura, tablaValuaciones } from "./constantes.js";

/**
 * Calcula los resultados en la tabla y esconde el formulario y muestra el boton de borrar y volver.
 */
export function calcularMensura() {
  document.getElementById("calculosMensura").style.display = "none";
  document.getElementById("calculosValuaciones").style.display = "none";
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

// export function cerrarMensura() {
// tablaMensura.style.display = "none";
//   document.getElementById("popUpMensura").style.display = "none";
//   document.getElementById("calculoMensura").style.display = "block";
//   document.getElementById("calculoValuaciones").style.display = "block";
//   cerrar.style.display = "none";
// }

// export function cerrarValuaciones() {
//   tablaValuaciones.style.display = "none";
//   document.getElementById("popUpValuaciones").style.display = "none";
//   document.getElementById("contenedorMensura").style.display = "none";
//   document.getElementById("contenedorValuaciones").style.display = "none";
// }
export function calcularValuaciones() {
  document.getElementById("calculosMensura").style.display = "none";
  document.getElementById("calculosValuaciones").style.display = "none";
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
