import {
  agregarFilaPreferencial,
  verTotal,
  agregarFila,
  mostrarTotalMensura,
} from "../secciones/funcionesGlobales.js";
import { calcularMensura, volverMensura } from "../secciones/botones.js";
import {
  valoresMensura,
  valoresValuaciones,
  modulos,
} from "../secciones/constantes.js";

function totalPreferencial(
  parcelas,
  ddjj,
  funcional,
  cementerio,
  estudio,
  estadoParcelario
) {
  // Calcular el total inicial sumando los valores de los módulos multiplicados por la cantidad.
  let total =
    ddjj * valor_modulo_ddjj +
    funcional * valor_modulo_ufuncional +
    cementerio * valor_modulo_cementerio +
    estadoParcelario * valor_modulo_parcelario +
    estudio * valor_modulo_estudio;
  // Si hay parcelas, agregar el valor modular de las parcelas multiplicado por la cantidad de parcelas.
  if (parcelas != 0) total += parcelasValorModular(parcelas) * parcelas;
  // Calcular el total preferencial multiplicando el total por el porcentaje preferencial.
  return (total * porc_preferencial) / 100;
}

const calcularBtnMensura = document.getElementById("calcular-btn");
calcularBtnMensura.addEventListener("click", () => {
  calcularMensura();
  mostrarTotalMensura(valoresMensura, modulos);
});

const volverBtnMensura = document.getElementById("volver-btn");
volverBtnMensura.addEventListener("click", volverMensura());
