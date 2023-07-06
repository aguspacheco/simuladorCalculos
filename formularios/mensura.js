import { mostrarTotalMensura } from "../secciones/funcionesMensura.js";
import {
  calcularMensura,
  volverMensura,
  borrarMensura,
} from "../secciones/botones.js";

const calcularBtnMensura = document.getElementById("calcular-btn");
calcularBtnMensura.addEventListener("click", () => {
  calcularMensura();
  mostrarTotalMensura();
});

const volverBtnMensura = document.getElementById("volver-btn");
volverBtnMensura.addEventListener("click", () => {
  volverMensura();
});

const borrarBtnMensura = document.getElementById("borrar-btn");
borrarBtnMensura.addEventListener("click", () => {
  borrarMensura();
});
