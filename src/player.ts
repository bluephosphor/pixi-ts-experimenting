import Entity from "./entity";

export default class Player extends Entity {
    constructor(x: number, y: number) {
        super(x, y);
        this.sprite._tintRGB = 200;
    }
}