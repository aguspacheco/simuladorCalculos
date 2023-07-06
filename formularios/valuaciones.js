import { mostrarTotalValuaciones } from "../secciones/funcionesValuaciones.js";
import {
  calcularValuaciones,
  borrarValuaciones,
} from "../secciones/botones.js";

const calcularBtnValuaciones = document.getElementById(
  "calcular-btnValuaciones"
);
calcularBtnValuaciones.addEventListener("click", () => {
  calcularValuaciones();
  mostrarTotalValuaciones();
});

const borrarBtnValuaciones = document.getElementById("borrar-btnValuaciones");
borrarBtnValuaciones.addEventListener("click", () => {
  borrarValuaciones();
});
