import { calcular, borrar } from "../secciones/botones.js";
import {
  abrirPopUp,
  cerrarPopUp,
  mostrarTotal,
} from "../secciones/funcionesGlobales.js";

const calcularBtnMensura = document.getElementById("calcular-btn");
calcularBtnMensura.addEventListener("click", () => {
  abrirPopUp("Mensura");
  calcular("Mensura");
  mostrarTotal("Mensura");
});

const cerrar = document.getElementById("cerrar");
cerrar.addEventListener("click", () => {
  cerrarPopUp("Mensura");
});

const borrarBtnMensura = document.getElementById("borrar-btn");
borrarBtnMensura.addEventListener("click", () => {
  borrar("Mensura");
});
