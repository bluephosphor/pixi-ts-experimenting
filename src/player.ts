import { Input } from "./controller";
import { Entity } from "./entity";

export class Player extends Entity {
    magnitude: number;
    
    constructor(x: number, y: number) {
        super(x, y);
        this.sprite._tintRGB = 200;
        this.magnitude = 5;
    }

    update(): void {
        if (Input.get('ArrowDown')) this.y += this.magnitude;
        if (Input.get('ArrowUp')) this.y -= this.magnitude;
        if (Input.get('ArrowLeft')) this.x -= this.magnitude;
        if (Input.get('ArrowRight')) this.x += this.magnitude;
    }
}