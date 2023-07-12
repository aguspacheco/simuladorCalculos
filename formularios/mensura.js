import {
  abrirVentanaMensura,
  mostrarTotalMensura,
} from "../secciones/funcionesMensura.js";
import {
  calcularMensura,
  borrarMensura,
  cerrarMensura,
} from "../secciones/botones.js";

const calcularBtnMensura = document.getElementById("calcular-btn");
calcularBtnMensura.addEventListener("click", () => {
  abrirVentanaMensura();
  calcularMensura();
  mostrarTotalMensura();
});

const cerrarBtnMensura = document.getElementById("cerrar");
cerrarBtnMensura.addEventListener("click", () => {
  cerrarMensura();
});

const borrarBtnMensura = document.getElementById("borrar-btn");
borrarBtnMensura.addEventListener("click", () => {
  borrarMensura();
});
