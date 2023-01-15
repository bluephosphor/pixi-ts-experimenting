import { Sprite } from "pixi.js";
import { Game } from "./main";

export const Entities = new Set<Entity>();

export class Entity {
  x: number;
  y: number;
  sprite: Sprite;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.sprite = Sprite.from("block.png");
    Entities.add(this);
    Game.stage.addChild(this.sprite);
  }

  draw() {
    this.sprite.x = this.x;
    this.sprite.y = this.y;
  }

  update() {}
}
