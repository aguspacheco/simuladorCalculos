import {
  valoresMensura,
  modulos,
  resultadosMensura,
  titulosMensura,
} from "./constantes.js";
import {
  agregarFila,
  agregarFilaPreferencial,
  formatoPesoArgentino,
} from "./funcionesGlobales.js";

function parcelasValorModular(parcelas) {
  const moduloUbicado = modulos.find((modulo) => {
    const [min, max] = modulo.rango;
    return parcelas >= min && parcelas <= max;
  });
  return moduloUbicado ? moduloUbicado.valor : 0;
}
export function crearTablaMensura(clase, entrada) {
  const parcelas = entrada[0] + entrada[1];
  const valorParcelas = parcelasValorModular(parcelas);
  const datosMensura = [valorParcelas, valorParcelas, ...valoresMensura];

  let sumaTotal = 0;

  titulosMensura.forEach((titulo, index) => {
    const valorModular = datosMensura[index];
    const cantidad = entrada[index];

    let total = valorModular * cantidad;
    agregarFila(titulo, cantidad, valorModular, total, resultadosMensura);
    sumaTotal += total;
  });

  const contenedor = document.getElementById(`abonar${clase}`);
  contenedor.textContent = formatoPesoArgentino(sumaTotal);
}
