import { valoresMensura, modulos, resultadosMensura } from "./constantes.js";
import { agregarFila, formatoPesoArgentino } from "./funcionesGlobales.js";

function parcelasValorModular(parcelas) {
  const moduloUbicado = modulos.find((modulo) => {
    const [min, max] = modulo.rango;
    return parcelas >= min && parcelas <= max;
  });
  return moduloUbicado ? moduloUbicado.valor : 0;
}

function totalPreferencialMensura(entrada) {
  const [parcelasOrigen, parcelasResultantes, , , , , , preferencial] = entrada;
  const parcelas = parcelasOrigen + parcelasResultantes;
  const valorParcelas = parcelasValorModular(parcelas);
  let total =
    parcelasOrigen * valoresMensura[0] +
    parcelasResultantes * valoresMensura[1] +
    entrada[2] * valoresMensura[2] +
    entrada[6] * valoresMensura[3] +
    entrada[4] * valoresMensura[4];

  if (parcelas != 0) total += valorParcelas * parcelas;

  return preferencial ? (total * valoresMensura[5]) / 100 : 0;
}

export function crearTablaMensura(clase, entrada) {
  const parcelas = entrada[0] + entrada[1];
  const valorParcelas = parcelasValorModular(parcelas);
  const datosMensura = [valorParcelas, valorParcelas, ...valoresMensura];

  const titulos = [
    "Parcelas origen",
    "Parcelas resultantes",
    "Unidades funcionales",
    "Declaraciones juradas",
    "Cementerio",
    "Estado parcelario",
    "Estudio de titulo y antecedentes",
    "Preferencial",
  ];

  let sumaTotal = 0;

  titulos.forEach((titulo, index) => {
    const valorModular = datosMensura[index];
    const cantidad = entrada[index];
    let total = valorModular * cantidad;
    agregarFila(titulo, cantidad, valorModular, total, resultadosMensura);

    sumaTotal += total;
  });

  const contenedor = document.getElementById(`abonar${clase}`);
  contenedor.textContent = formatoPesoArgentino(sumaTotal);
}
