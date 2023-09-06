class Retangulo {
    l1: number = 0;
    l2: number = 0;

    calcularArea(): number {
        return this.l1 * this.l2;
    }
    calculaPerimetro(): number {
        return 2*this.l1 + 2*this.l2;
    }
    testaRetangulo(): void {
        console.log(retangulo.calculaPerimetro());
    }
}

let retangulo : Retangulo  = new Retangulo();

retangulo.l1 = 10;
retangulo.l2 = 20;

retangulo.testaRetangulo();