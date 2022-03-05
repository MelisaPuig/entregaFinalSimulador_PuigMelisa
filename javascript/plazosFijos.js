

"use strict";

// El dato proviene del banco.
const TASA_DE_INTERES = 0.37;
let plazoFijo = false;

function esPlazoValido(plazo) {
  if (plazo % 30 !== 0) {
    return false;
  }
  return plazo >= 30 && plazo <= 360;
}

function esMontoValido(monto) {
  if (monto % 10 !== 0) {
    return false;
  }
  return monto > 0 && monto <= 1000000;
}

function redondearADosDigitos(numero) {
  const numeroRedondeado = numero.toFixed(2);
  return Number(numeroRedondeado);
}

function generarPlazoFijo() {
  const rawMonto = $("#plazo-fijo-monto").val();
  const rawPlazo = $("#plazo-fijo-plazo").val();
  if (rawMonto === "" || rawPlazo === "") {
    return;
  }
  const monto = Number(rawMonto);
  const plazo = Number(rawPlazo);
  if (!esMontoValido(monto)) {
    throw new Error(`El monto asignado no es válido.`);
  }
  if (!esPlazoValido(plazo)) {
    throw new Error(`El plazo asignado no es válido.`);
  }
  plazoFijo = new PlazoFijo(monto, TASA_DE_INTERES);
  console.log(`Se ha generado un plazo fijo de monto ${monto}`);
}

function mostrarEstadoPlazoFijo() {
  let razonGanancias = (plazoFijo.montoActual / plazoFijo.montoInicial) * 100;
  razonGanancias = redondearADosDigitos(razonGanancias);
  const montoActual = redondearADosDigitos(plazoFijo.montoActual);
  $("#plazo-fijo-estado").html(
    `El monto final (capital inicial + interés ganado) es de $${montoActual}. El capital ha aumentado un ${razonGanancias} %.`
  );
}

function actualizarPlazoFijo(plazo) {
  if (plazoFijo === false) {
    throw new Error(`No se ha generado un plazo fijo.`);
  }
  plazo = Number(plazo);
  if (!esPlazoValido(plazo)) {
    throw new Error(`El plazo asignado no es válido.`);
  }
  plazoFijo.depositarPorPlazo(plazo);
}

$("#boton-generar-plazo-fijo").click(() => {
  if (!estaLogueado()) {
    alert(`El usuario debe loguearse primero.`);
    return;
  }
  if (plazoFijo === false) {
    generarPlazoFijo();
    $("#plazo-fijo-monto").css("display", "none");
    $("#boton-generar-plazo-fijo").text("Actualizar plazo fijo");
    $("#section-plazo-fijo-historial").css("display", "block");
  }
  const plazo = $("#plazo-fijo-plazo").val();
  actualizarPlazoFijo(plazo);
  mostrarEstadoPlazoFijo();
});

$("#select-historial-plazo").change(() => {
  const plazoBuscado = Number($("#select-historial-plazo").val());
  if (!esPlazoValido(plazoBuscado)) {
    throw new Error(`El plazo para filtrar no es válido.`);
  }
  const entradasConPlazoEspecifico =
    plazoFijo.verHistorialFiltradoPorPlazo(plazoBuscado);
  const cantidadElementos = entradasConPlazoEspecifico.length;
  const intereses = entradasConPlazoEspecifico.map((e) => e.interes);
  const joinedIntereses = intereses.join(", ");
  let detalle = `El historial cuenta con ${cantidadElementos} entradas con el plazo de ${plazoBuscado} días. `;
  if (cantidadElementos > 0) {
    detalle += `Los intereses específicos de los distintos plazos son: ${joinedIntereses}.`;
  }
  $("#plazo-fijo-historial-detalle").html(detalle);
});
