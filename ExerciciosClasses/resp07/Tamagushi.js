class Tamagushi {
    constructor(nome, fome, saude, idade) {
        this._nome = nome;
        this._fome = fome;
        this._saude = saude;
        this._idade = idade;
        this._humor = this.getHumor();
    }

    mudarNome(nome) {
        this._nome = nome;
    }

    getHumor() {
        return (this._fome + this._saude) / 2;
    }
}