"use strict";
class SistuacaoFinanceira {
    constructor() {
        this.valorCreditos = 0;
        this.valorDebitos = 0;
    }
    saldo() {
        return this.valorCreditos - this.valorDebitos;
    }
}
let s1 = new SistuacaoFinanceira();
s1.valorCreditos = 1000;
s1.valorDebitos = 500.40;
console.log(`Saldo: ${s1.saldo().toFixed(2)}`);
