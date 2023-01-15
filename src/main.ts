import './style.css'
import { Application } from 'pixi.js';
import { Player } from './player';
import { Entities, Entity } from './entity';
import { Controller } from './controller';

export const Game = new Application({ width: 480, height: 480 });
document.body.appendChild(Game.view);

Controller.init();
const player = new Player(64,64);
const entity = new Entity(128,200);

Game.ticker.add((delta) => {
    Entities.forEach(e => {
        e.update();
        e.draw();
    })
})