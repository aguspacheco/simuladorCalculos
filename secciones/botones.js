const borrarBtnMensura = document.getElementById("borrar-btn");
const volverBtnMensura = document.getElementById("volver-btn");
const calcularBtnMensura = document.getElementById("calcular-btn");

/**
 * Calcula los resultados en la tabla y esconde el formulario y muestra el boton de borrar y volver.
 */
export function calcularMensura() {
  formularioMensura.style.display = "none";
  borrarBtnMensura.style.display = "none";
  tablaMensura.style.display = "inline-block";
  volverBtnMensura.style.display = "inline-block";
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
  });

  datos.forEach((datos) => {
    document.getElementById("preferencialMensura").checked = false;
  });
}
