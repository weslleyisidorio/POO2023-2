class SistuacaoFinanceira {
    valorCreditos: number = 0;
    valorDebitos: number = 0;

    saldo(): number {
        return this.valorCreditos - this.valorDebitos;
    }

}

let s1: SistuacaoFinanceira = new SistuacaoFinanceira();

s1.valorCreditos = 1000;
s1.valorDebitos = 500.40;

console.log(`Saldo: ${s1.saldo().toFixed(2)}`)
