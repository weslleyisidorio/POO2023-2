"use strict";
class Retangulo {
    constructor() {
        this.l1 = 0;
        this.l2 = 0;
    }
    calcularArea() {
        return this.l1 * this.l2;
    }
    calculaPerimetro() {
        return 2 * this.l1 + 2 * this.l2;
    }
    testaRetangulo() {
        console.log(retangulo.calculaPerimetro());
    }
}
let retangulo = new Retangulo();
retangulo.l1 = 10;
retangulo.l2 = 20;
retangulo.testaRetangulo();
