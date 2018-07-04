class TV {
    constructor(canal, volume) {
        this._canal = canal;
        this._volume = volume;
    }

    mudarCanal(canal) {
        this._canal = canal;
    }
    mudarVolume(volume) {
        if (volume > 100) {
            volume = 100;
        } else if (valume < 0) {
            volume = 0;
        }
        this._volume = volume;
    }
}