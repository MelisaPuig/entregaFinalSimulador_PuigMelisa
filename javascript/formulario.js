"use strict";
//formulario
function getDatosFormulario() {
  let nombre = document.getElementById("name").value;
  let eleccionInversiones = document.getElementById("Inversion").value;
  let contactoEmail = document.getElementById("email").value;
  let contactoTelefono = document.getElementById("Telefono").value;
  let consultaInversiones = document.getElementById("consulta").value;
  const datosFormulario = {
    nombre,
    eleccionInversiones,
    contactoEmail,
    contactoTelefono,
    consultaInversiones,
  };
  console.log("Los datos del formulario son:");
  console.log(datosFormulario);
  return datosFormulario;
}

// BOTON DE ENVIAR

const botonFormulario = document.querySelector(".boton-submit");
botonFormulario.addEventListener("click",(evt) =>{
  evt.preventDefault();
  getDatosFormulario();
  const inputs = document.querySelectorAll(
    "#name, #email, #Telefono, #Inversion, #consulta"
  );
  const values = {};
  inputs.forEach((input) => {
    values[input.id] = input.value;
  });
  const jsonValues = JSON.stringify(values);
  localStorage.setItem("inputs", jsonValues);
  console.log(`Se han guardado en el local storage los valores de los inputs.`);
});

/**
 * Cargar los elementos del local storage.
 */
window.addEventListener("load", () => {
  const inputs = localStorage.getItem("inputs");
  if (!inputs) {
    console.log(
      `No hay elementos guardados en el Local Storage del formulario, salteo.`
    );
    return;
  }
  const inputValues = JSON.parse(inputs);
  const inputIds = Object.keys(inputValues);
  inputIds.forEach((inputId) => {
    const input = document.querySelector(`#${inputId}`);
    input.value = inputValues[inputId];
  });

  console.log(
    `Se han cargado en los inputs los valores guardados en el Local Storage: ${inputs}`
  );

});





