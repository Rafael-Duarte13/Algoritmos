class Retangulo {
    constructor(base, altura) {
        this._base = base;
        this._altura = altura;
    }

    mudarBase(base) {
        this._base = base;
    }
    mudarAltura(altura) {
        this._altura = altura;
    }

    obterArea() {
        return this._base * this._altura;
    }
    obterPerimetro() {
        return 2 * (this._base + this._altura);
    }
}