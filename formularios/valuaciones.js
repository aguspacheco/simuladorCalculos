import {
  abrirPopUp,
  mostrarTotalValuaciones,
} from "../secciones/funcionesValuaciones.js";
import {
  calcularValuaciones,
  borrarValuaciones,
} from "../secciones/botones.js";
import { cerrarVentana } from "../secciones/funcionesGlobales.js";

const calcularBtnValuaciones = document.getElementById(
  "calcular-btnValuaciones"
);
calcularBtnValuaciones.addEventListener("click", () => {
  abrirPopUp();
  calcularValuaciones();
  mostrarTotalValuaciones();
});

const cerrar = document.getElementById("cerrarValuaciones");
cerrar.addEventListener("click", () => {
  cerrarVentana();
});

const borrarBtnValuaciones = document.getElementById("borrar-btnValuaciones");
borrarBtnValuaciones.addEventListener("click", () => {
  borrarValuaciones();
});
