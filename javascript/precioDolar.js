function obtenerPreciosDeDolarSI(respuestaDolarSi) {
  const oficial = respuestaDolarSi.find(
    (e) => e.casa.nombre === "Dolar Oficial"
  ).casa;
  const blue = respuestaDolarSi.find((e) => e.casa.nombre === "Dolar Blue").casa;
  return {
    oficial: {
      compra: Number.parseFloat(oficial.compra.replace(",", ".")),
      venta: Number.parseFloat(oficial.venta.replace(",", ".")),
    },
    blue: {
      compra: Number.parseFloat(blue.compra.replace(",", ".")),
      venta: Number.parseFloat(blue.venta.replace(",", ".")),
    },
  };
}

/**
 * Updates the dolar price.
 */
function actualizarPrecioDolar() {
  const url = "https://www.dolarsi.com/api/api.php?type=valoresprincipales";
  const settings = {
    url,
    async: true,
    crossDomain: true,
    method: "GET",
  };
  $.ajax(settings).done((response) => {
    const preciosDolar = obtenerPreciosDeDolarSI(response);
    $(".dolar_oficial_precio_venta").text(preciosDolar.oficial.venta);
    $(".dolar_oficial_precio_compra").text(preciosDolar.oficial.compra);
  });
}

/**
 * Actualizar el precio del dólar cada X segundos.
 */
const INTERVALO_ACTUALIZACION_DOLAR = 5000;
setTimeout(actualizarPrecioDolar, INTERVALO_ACTUALIZACION_DOLAR);
