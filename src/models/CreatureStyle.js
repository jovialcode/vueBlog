export default class CreatureStyle {
    constructor(
        width
        , height
        , left
        , top
    ) {
        this._width = width;
        this._height = height;
        this._top = top | 0;
        this._left = left | 0;
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

    get left() {
        return this._left;
    }

    set left(value) {
        this._left = value;
    }

    get top() {
        return this._top;
    }

    set top(value) {
        this._top = value;
    }
}