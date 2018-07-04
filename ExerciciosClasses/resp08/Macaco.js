class Macaco {
    constructor(nome, bucho) {
        this._nome = nome;
        this._bucho = bucho;
    }

    comer() {
        return this._bucho += (Math.random().toFixed(0) * 10);
    }
    verBucho(bucho) {
        return this._bucho;
    }
    digerir() {}

    toString() {
        return 'Nome: ' + this._nome + '\nBucho: ' + this._bucho;
    }
}