import { Input } from '../../meta/controller';
import { Entity } from './entity';

export class Player extends Entity {
    magnitude: number;

    constructor(x: number, y: number) {
        super(x, y);
        this.magnitude = 5;
        this.color = 0x00ff00;
        this.width = 24;
        this.height = 24;
        this.resetMask();
    }

    update(): void {
        if (Input.get('ArrowDown')) this.y += this.magnitude;
        if (Input.get('ArrowUp')) this.y -= this.magnitude;
        if (Input.get('ArrowLeft')) this.x -= this.magnitude;
        if (Input.get('ArrowRight')) this.x += this.magnitude;
    }
}
