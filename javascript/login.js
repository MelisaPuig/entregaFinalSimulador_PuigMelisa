"use strict";
// Datos del usuario
function estaLogueado() {
  const dataLogin = sessionStorage.getItem("dataLogin");
  if (!dataLogin) {
    return false;
  }
  return true;
}

function loguear(nombre, password) {
  const dataLogin = JSON.stringify({ nombre, password });
  sessionStorage.setItem("dataLogin", dataLogin);
  return true;
}

function ocultarSectionLoginSiEstaLogueado() {
  if (estaLogueado()) {
    console.log(`Se ha logueado correctamente.`);
    $("#section-identidad").css("display", "none");
  }
}



$("#boton-identidad-login").click(() => {
  const nombre = $("#identidad-nombre").val();
  const password = $("#identidad-password").val();
  loguear(nombre, password);
  ocultarSectionLoginSiEstaLogueado();
 
  });

  const imagenLogin= 
  $("#boton-identidad-login").click(() => {
  $("body").prepend('<p class="login"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-check-fill" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15.854 5.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L12.5 7.793l2.646-2.647a.5.5 0 0 1 .708 0z"/><path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg>Usted esta logueado</p>');
  //Animamos sus propiedades CSS con animate
  $(".login").animate({  left:'250px',
                          opacity:'0.5',
                          height:'50px',
                          marginLeft: `700px`,
                          width:'200px' },
                          2000,            
                 function(){        
                $(".login").css("color", "red")
        .slideUp(2000)
        .slideDown(2000);
                           }
                          );  
                        });

window.addEventListener("load", () => ocultarSectionLoginSiEstaLogueado());




