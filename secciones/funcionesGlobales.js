const resultadosMensura = document.getElementById("resultadosMensura");

/**
 * CAMBIA EL VALOR DE UNA CADENA CON EL FORMATO PESO ARGENTINO.
 * @param {Number} monto -El monto a cambiar de formato
 * @returns {String} -El monto cambiado como cadena con el formato de peso argentino.
 */
export function formatoPesoArgentino(monto) {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    currencyDisplay: "symbol",
  }).format(monto);
}

/**
 * Se ve el total que tiene que pagar el usuario en la pagina.
 * @param {Number} total - El total que se tiene que pagar.
 * @param {Number} abonar - El contenedor del total.
 */
export function verTotal(total, abonar) {
  const contenedor = document.getElementById(abonar);
  contenedor.innerHTML = formatoPesoArgentino(total);
}

/**
 * Agrega una fila a la tabla de resultados con la informacion de datos ingresados, cantidad, valor modular, y valor total.
 * @param {string} etiqueta - La etiqueta de la fila.
 * @param {number} cantidad  - La cantidad que se ingreso en el formulario.
 * @param {number} valorModular - El valor modular de cada elemento que hay en la fila.
 */
export function agregarFila(etiqueta, cantidad, valorModular = 0, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
        <th class = "texto-izquierda">${etiqueta}</th> 
        <td>${cantidad}</td>
        <td>${formatoPesoArgentino(valorModular)}</td>
        <td>${formatoPesoArgentino(valorModular * cantidad)}</td>
        `;
  tabla.appendChild(fila);
}

export function agregarFilaPreferencial(preferencial, monto, tabla) {
  const fila = document.createElement("tr");
  fila.innerHTML = `
    <th class = "texto-izquierda">${etiqueta}</th>
    <td>${cantidad}</td>
    <td>${preferencial ? "Si" : "No"}</td> 
    <td>${formatoPesoArgentino(monto)}</td>
    `;
  tabla.appendChild(fila);
}

export function mostrarTotalMensura(valoresMensura, modulos) {
  const datosEntrada = recibirDatosEntrada();
  const total = calcularTotal(datosEntrada, valoresMensura);
  creaTablaResultados(datosEntrada, modulos, valoresMensura);
  verTotal(total, "abonarMensura");
}

/**
 * RECIBE LOS VALORES DE ENTRADA QUE SON INGRESADOS  POR EL USUARIO EN EL FORMULARIO.
 * @returns {Object} -Un objeto con los valores que ingreso el usuario en el formulario.
 */
export function recibirDatosEntrada() {
  const origen = parseInt(document.getElementById("origen").value) || 0;
  const resultante = parseInt(document.getElementById("resultante").value) || 0;
  const ddjj = parseInt(document.getElementById("ddjj").value) || 0;
  const estudio = parseInt(document.getElementById("estudio").value) || 0;
  const funcional = parseInt(document.getElementById("ufuncional").value) || 0;
  const cementerio = parseInt(document.getElementById("cementerio").value) || 0;
  const estadoParcelario =
    parseInt(document.getElementById("estadoParcelario").value) || 0;
  const preferencial = document.getElementById("preferencialMensura").checked;
  const parcelas = origen + resultante;
  return {
    origen,
    resultante,
    ddjj,
    estudio,
    funcional,
    cementerio,
    estadoParcelario,
    preferencial,
    parcelas,
  };
}

/**
 * Calcula el total que debe pagar segun los valores que el usuario ingreso.
 * @param {Object} datosEntrada - Es un objeto con los valores ingreso por el usuario.
 * @returns {Number} - El total a pagar segun los valores ingresados por el usuario.
 */
function calcularTotal(
  {
    parcelas,
    ddjj,
    preferencial,
    funcional,
    cementerio,
    estudio,
    estadoParcelario,
  },
  valoresMensura
) {
  // Calcular el total inicial sumando los valores de los módulos multiplicados por la cantidad.
  let total =
    ddjj * valoresMensura[0] +
    funcional * valoresMensura[1] +
    cementerio * valoresMensura[2] +
    estadoParcelario * valoresMensura[3] +
    estudio * valoresMensura[4];
  total +=
    cementerio * valoresMensura[3] * parcelas * funcional * valoresMensura[1];
  // Si hay parcelas agregar el valor modular de las parcelas multiplicado por la cantidad de parcelas
  if (parcelas != 0) total += parcelasValorModular(parcelas) * parcelas;
  // Si es preferencial agregar el porcentaje preferencial al total
  if (preferencial) total *= 1 + porcentajePreferencial / 100;
  return Math.round(total * 100) / 100;
}

/**
 * CREA UNA TABLA CON LOS RESULTADOS DE CADA ELEMENTO CON SUS CANTIDADES Y VALORES MODULADRES Y LA AGREGA A LA SECCION RESULTADOS.
 * @param {object} datosEntrada - Un objeto con los valoresd entrada que ingreso el usuario.
 */
function creaTablaResultados(datosEntrada, modulos, valoresMensura) {
  const {
    origen,
    resultante,
    ddjj,
    funcional,
    cementerio,
    estadoParcelario,
    preferencial,
    parcelas,
  } = datosEntrada;
  const valor_modulo_parcelas = parcelasValorModular(parcelas, modulos);

  agregarFila(
    "Parcelas origen",
    origen,
    valor_modulo_parcelas,
    resultadosMensura
  );

  agregarFila(
    "Parcelas resultantes",
    resultante,
    valor_modulo_parcelas,
    resultadosMensura
  );
  agregarFila("Unidades funcionales", valoresMensura[1], resultadosMensura);

  agregarFila("Cementerio", valoresMensura[2], resultadosMensura);

  agregarFila(
    "Estudio de titulo y antecedente dominal",
    valoresMensura[4],
    resultadosMensura
  );

  agregarFila(
    "Verificación estado parcelario",
    valorModular[3],
    resultadosMensura
  );

  agregarFila(
    "Declaraciones juradas",
    ddjj,
    valoresMensura[0],
    resultadosMensura
  );

  const precioPreferencial = preferencial
    ? totalPreferencial(
        parcelas,
        ddjj,
        funcional,
        cementerio,
        estadoParcelario,
        estudio
      )
    : 0;

  agregarFilaPreferencial(preferencial, precioPreferencial, resultadosMensura);
}

/**
 * DEVUELVE EL VALOR MODULAR QUE CORRESPONDE A LA CANTIDAD DE PARCELAS INGRESADAS.
 * @param {Number} parcelas - La cantidad de parcelas que se ingresan.
 * @returns {Number} - El valor modular que se corresponde a la cantidad de parcelas ingresdas.
 */
function parcelasValorModular(parcelas, modulos) {
  const moduloUbicado = modulos.find((modulo) => {
    const [min, max] = modulo.rango;
    return parcelas >= min && parcelas <= max;
  });
  return moduloUbicado ? moduloUbicado.valor : 0;
}
