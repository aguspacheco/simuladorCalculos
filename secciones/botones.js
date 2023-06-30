/**
 * Calcula los resultados en la tabla y esconde el formulario y muestra el boton de borrar y volver.
 */
export function calcularMensura() {
  formularioMensura.style.display = "none";
  borrarBtnMensura.style.display = "none";
  // volverBtnMensura.style.display = "none";

  tablaMensura.style.display = "block";
  volverBtnMensura.style.display = "inline-block";
}

/**
 * Elimina todos los datos ingresados.
 */
export const borrarBtnMensura = document.getElementById("borrar-btn");
borrarBtnMensura.addEventListener("click", () => {
  const elementos = [
    "origen",
    "resultante",
    "ddjj",
    "ufuncional",
    "cementerio",
    "estadoParcelario",
    "estudio",
    "preferencialMensura",
  ];

  elementos.forEach((elemento) => {
    document.getElementById(elemento).value = "";
  });

  document.getElementById("preferencialMensura").checked = false;
});

/**
 * Vuelve al formulario.
 */
export const volverBtnMensura = document.getElementById("volver-btn");
volverBtnMensura.addEventListener("click", () => {
  resultadosMensura.innerHTML = "";
  tablaMensura.style.display = "none";
  volverBtn.style.display = "none";
  formularioMensura.style.display = "flex";
  borrarBtn.style.display = "inline-block";
  volverBtn.style.display = "inline-block";
  formularioValuaciones.style.display = "block";
});
