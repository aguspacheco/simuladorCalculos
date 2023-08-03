/**
 * Calcula los resultados en la tabla y esconde el formulario y muestra el botón de borrar y volver.
 */
export function calcular() {
  document.getElementById("calculosMensura").style.display = "none";
  document.getElementById("calculosValuaciones").style.display = "none";
}

/**
 * Borra los datos de un formulario.
 * @param {string} formulario - El ID del formulario que se quiere borrar.
 */
export function borrar(clase) {
  const formulario = document.getElementById(`formulario${clase}`);
  formulario.reset();
}
