"use strict";
class Circulo {
    constructor() {
        this.raio = 0;
    }
    calculaArea() {
        return Math.PI * (this.raio ** 2);
    }
    calculaPerimetro() {
        return 2 * Math.PI * this.raio;
    }
}
let c1 = new Circulo();
c1.raio = 10;
console.log(`Area: ${c1.calculaArea().toFixed(2)}`);
console.log(`Perimetro: ${c1.calculaPerimetro().toFixed(2)}`);
