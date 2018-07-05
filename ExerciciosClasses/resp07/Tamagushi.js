class Tamagushi {
    constructor(nome, fome, saude, idade) {
        this._nome = nome;
        this._fome = fome;
        this._saude = saude;
        this._idade = idade;
    }

    definirNome(nome) {
        this._nome = nome;
    }
    definirFome(fome) {
        this._fome = fome;
    }
    definirSaude(saude) {
        this._saude = saude;
    }
    definirIdade(idade) {
        this._idade = idade;
    }

    obterNome() {
        return this._nome;
    }
    obterFome() {
        return this._fome;
    }
    obterSaude() {
        return this._saude;
    }
    obterIdade() {
        return this._idade;
    }
    obterHumor() {
        let humor = (this.obterFome() + this.obterSaude()) / 2;
        if (humor < 20) {
            return 1; //triste
        } else if (humor < 40) {
            return 2; //chateado
        } else if (humor < 60) {
            return 3; //normal
        } else if (humor < 80) {
            return 4; //feliz
        } else {
            return 5; //super feliz
        }
    }
}