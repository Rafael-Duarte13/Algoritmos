class ContaCorrente {
    constructor(numero, correntista, saldo = 0) {
        this._numero = numero;
        this._correntista = correntista;
        this._saldo = saldo;
    }

    alterarNome(novoCorrentista) {
        this._correntista = novoCorrentista;
    }
    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            return true;
        }
        return false;
    }
    saque(valor) {
        if (valor > 0 && valor <= this._saldo) {
            this._saldo -= valor;
            return true;
        }
        return false;
    }
    transferir(valor, contaDestino) {
        if (this.saque(valor)) {
            contaDestino.depositar(valor);
            return true;
        }
        return false;
    }

    toString() {
        return 'Conta{ Titular: ' + this._correntista + ', Número da conta: ' + this._numero + ', Saldo: ' + this._saldo.toFixed(2) + 'R$ }';
    }
}