import { Sprite } from "pixi.js";
import { app } from "./main";

export default class Player {
    sprite: Sprite;
    
    constructor(){
        this.sprite = Sprite.from('player.png');
        this.sprite.x = app.renderer.width / 2;
        this.sprite.y = app.renderer.height / 2;
    }

    update(){
        this.sprite.x += 1;
    }
}