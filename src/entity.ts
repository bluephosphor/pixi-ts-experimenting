import { Graphics, Sprite } from 'pixi.js';
import { Game } from '.';

export const Entities = new Set<Entity>();

export class Entity {
    x: number;
    y: number;
    width: number;
    height: number;
    sprite: Sprite | undefined;
    mask: Graphics;
    color: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.width = 32;
        this.height = 32;
        this.sprite = undefined;
        this.color = 0xffffff;
        
        this.mask = new Graphics();
        this.resetMask();

        Entities.add(this);
        Game.stage.addChild(this.mask);
    }

    resetMask(): void {
        this.mask.beginFill(this.color);
        this.mask.drawRect(this.x, this.y, this.width, this.height);
    }

    update(): void {}

    draw(): void{
        this.mask.x = this.x;
        this.mask.y = this.y;
    }
}
