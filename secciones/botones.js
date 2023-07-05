const borrarBtnMensura = document.getElementById("borrar-btn");
const volverBtnMensura = document.getElementById("volver-btn");
const calcularBtnMensura = document.getElementById("calcular-btn");
const calcularBtnValuaciones = document.getElementById("calcular-btn");
const borrarBtnValuaciones = document.getElementById("borrar-btn");

/**
 * Calcula los resultados en la tabla y esconde el formulario y muestra el boton de borrar y volver.
 */
export function calcularMensura() {
  formularioMensura.style.display = "none";
  borrarBtnMensura.style.display = "none";
  tablaMensura.style.display = "inline-block";
  volverBtnMensura.style.display = "block";
  calcularBtnMensura.style.display = "none";
}

/**
 * Vuelve al formulario.
 */
export function volverMensura() {
  resultadosMensura.innerHTML = "";
  tablaMensura.style.display = "none";
  formularioMensura.style.display = "block";
  borrarBtnMensura.style.display = "inline-block";
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
  formularioValuaciones.style.display = "none";
  borrarBtnValuaciones.style.display = "none";
  tablaValuaciones.style.display = "inline-block";
  // volverBtnValuaciones.style.display = "block";
  calcularBtnValuaciones.style.display = "none";
}
