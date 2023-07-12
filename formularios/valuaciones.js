import {
  abrirPopUp,
  mostrarTotalValuaciones,
  cerrarValuaciones,
} from "../secciones/funcionesValuaciones.js";
import {
  calcularValuaciones,
  borrarValuaciones,
} from "../secciones/botones.js";

const calcularBtnValuaciones = document.getElementById(
  "calcular-btnValuaciones"
);
calcularBtnValuaciones.addEventListener("click", () => {
  abrirPopUp();
  calcularValuaciones();
  mostrarTotalValuaciones();
});

const cerrarBtnValuaciones = document.getElementById("cerrarValuaciones");
cerrarBtnValuaciones.addEventListener("click", () => {
  cerrarValuaciones();
});

const borrarBtnValuaciones = document.getElementById("borrar-btnValuaciones");
borrarBtnValuaciones.addEventListener("click", () => {
  borrarValuaciones();
});
