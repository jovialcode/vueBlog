import CreatureStyle from "./CreatureStyle";

export default class Creature extends CreatureStyle{
    constructor(
        type
        , uuid
        , style
    ) {
        super(style);
        this._uuid = uuid;
        this._type = type;
    }

    get type() {
        return this._type;
    }

    set type(value) {
        this._type = value;
    }


    get uuid() {
        return this._uuid;
    }

    set uuid(value) {
        this._uuid = value;
    }
};