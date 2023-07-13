/**
 * Calcula los resultados en la tabla y esconde el formulario y muestra el boton de borrar y volver.
 */
export function calcular() {
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
