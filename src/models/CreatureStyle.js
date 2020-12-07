export default class CreatureStyle {
    constructor(
        width
        , height
        , positionX
        , positionY
    ) {
        this._width = width;
        this._height = height;
        this._positionY = positionY;
        this._positionX = positionX;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
    }

    get positionX() {
        return this._positionX;
    }

    set positionX(value) {
        this._positionX = value;
    }

    get positionY() {
        return this._positionY;
    }

    set positionY(value) {
        this._positionY = value;
    }
}