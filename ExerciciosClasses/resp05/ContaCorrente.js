class ContaCorrente {
    constructor(numero, nome, saldo) {
        this._numero = numero;
        this._correntista = nome;
        this.saldo = 0;
    }

    alterarNome(nome) {
        this._correntista = nome;
    }
    deposito(valor) {
        this.saldo += +valor;
    }
    saque(valor) {
        this.saldo += -valor;
    }
}