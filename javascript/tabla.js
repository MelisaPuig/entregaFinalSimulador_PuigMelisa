// tabla
const th = document.getElementsByTagName("th");
const titulos = ["INDICADORES", "PLAZO FIJO", "BONO"];
let index = 0;
for (let cadaTh of th) {
  cadaTh.innerHTML = titulos[index];
  index++;
}

  const tasasInversiones = ["Tasa", "37%", " 5%"];
  const plazoInversiones = ["Plazo"," 30 y 360", " 30 y 3600"];
  const td = document.getElementsByTagName("td");

  
function popularTabla(desde, hasta, datosInversiones) {
  let contador = 0;
  for (let index = desde; index <= hasta; index++) {
    td[index].innerHTML = datosInversiones[contador];
  contador++;
  }
  }

  popularTabla(1, 3, tasasInversiones);
  popularTabla(4, 6, plazoInversiones);

//  LISTA

const section = document.createElement("section");
const div2 = document.createElement("div");
const ul = document.createElement("ul");
const descripcionInversiones = [
  "INVERSIONES",
  "PF: se pacta una tasa y un pazo",
  "FCI: amplia tus oportunidades",
  "Utiliza nuestro HomeBanking",
  "Contamos con profesionales capacitados",
  "Contamos con idòneos en Mercado de Capitales",
];
const li = document.createElement("li");
section.appendChild(div2);
div2.appendChild(ul);
div2.setAttribute("class", "masInversiones");
document.body.appendChild(div2);

for (let i = 0; i < 6; i++) {
  let li = document.createElement("li");
  li.innerHTML = descripcionInversiones[i];
  li.setAttribute("class", "inversionesLi");
  ul.appendChild(li);
}
