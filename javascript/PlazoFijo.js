// agregado de dinero al PF
class PlazoFijo {
  constructor(montoInicial, tasaInteresAnual) {
    this.montoInicial = montoInicial;
    this.montoActual = montoInicial;
    this.tasaInteresAnual = tasaInteresAnual;
    this.duracionPlazoTotal = 0;
    this.historial = [];
  }

  depositarPorPlazo(plazoEnDias) {
    const DURACION_ANIO = 365;
    let interes =
      this.montoActual *
      ((this.tasaInteresAnual * plazoEnDias) / DURACION_ANIO);
    interes = redondearADosDigitos(interes);
    this.montoActual += interes;
    this.duracionPlazoTotal += plazoEnDias;
    console.log(
      `El monto en estos ${this.duracionPlazoTotal} días ha aumentado desde ${this.montoInicial} a ${this.montoActual}.`
    );

    const agregado = { plazo: plazoEnDias, interes: interes };
    this.historial.push(agregado);
    console.log(
      `Se agregó un elemento al historial del plazo fijo, ahora tiene ${this.historial.length} elementos.`
    );
    console.log(this.historial);
  }

  verHistorialFiltradoPorPlazo(plazo) {
    return this.historial.filter((e) => e.plazo === plazo);
  }
}
