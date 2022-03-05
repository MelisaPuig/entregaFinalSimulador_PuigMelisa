"use strict";

//el retorno, la duracion del periodo y el interes de financiamiento los pone el emisor del bono
const DURACION_PERIODO = 30;
const INTERESPERIODO = 10;
const RETORNO = 5;
function obtenerInteres(monto, INTERESPERIODO, DURACION_PERIODO) {
  return (monto * INTERESPERIODO) / DURACION_PERIODO;
}

function calcularPVABono(interes, periodos, retorno) {
  return (interes * ((1 - (1 + RETORNO)) ^ -periodos)) / RETORNO;
}

function ValoractualdelPrincipal(monto, retorno, periodos) {
  return (monto / (1 + retorno / 100)) ^ periodos;
}

$("#boton-bonos-invertir").click(() => {
  if (!estaLogueado()) {
    throw new Error(`No puede generar un bono si el usuario no está logueado.`);
  }
  const monto = Number($("#bono-monto").val());
  const plazo = Number($("#bono-plazo").val());
  const interes = obtenerInteres(monto, INTERESPERIODO, DURACION_PERIODO);
  const periodos = plazo / DURACION_PERIODO;
  const PVA = calcularPVABono(interes, periodos, RETORNO);
  const VAP = ValoractualdelPrincipal(monto, RETORNO, periodos);
  const respuesta = `Cobra Intereses mensuales de ${redondearADosDigitos(
    PVA
  )} y el Valor actual del bono es ${redondearADosDigitos(VAP)} en capital.`;
  $("#bono-respuesta").html(respuesta);
});




const input=document.getElementById ("input-botones");

$(`#boton-click-mas-inversiones`).on("click", ()=> {  
  window.location.href = "./error.html";
  return false;
 }
);


