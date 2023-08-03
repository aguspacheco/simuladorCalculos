import { calcular, borrar } from "../secciones/botones.js";
import {
  cerrarPopUp,
  abrirPopUp,
  mostrarTotal,
} from "../secciones/funcionesGlobales.js";

const calcularBtnValuaciones = document.getElementById(
  "calcular-btnValuaciones"
);
calcularBtnValuaciones.addEventListener("click", () => {
  abrirPopUp("Valuaciones");
  calcular("Valuaciones");
  mostrarTotal("Valuaciones");
});

const cerrar = document.getElementById("cerrarValuaciones");
cerrar.addEventListener("click", () => {
  cerrarPopUp("Valuaciones");
});

const borrarBtnValuaciones = document.getElementById("borrar-btnValuaciones");
borrarBtnValuaciones.addEventListener("click", () => {
  borrar("Valuaciones");
});
