const borrarBtnMensura = document.getElementById("borrar-btn");
const volverBtnMensura = document.getElementById("volver-btn");
/**
 * Calcula los resultados en la tabla y esconde el formulario y muestra el boton de borrar y volver.
 */
export function calcularMensura() {
  formularioMensura.style.display = "none";
  borrarBtnMensura.style.display = "none";

  tablaMensura.style.display = "block";
  volverBtnMensura.style.display = "inline-block";
}

/**
 * Vuelve al formulario.
 */
export function volverMensura() {
  document.getElementById("volver-btn").style.display = "inline-block";
  resultadosMensura.innerHTML = "";
  tablaMensura.style.display = "none";
  formularioMensura.style.display = "flex";
  formularioValuaciones.style.display = "block";
}
