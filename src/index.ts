import './style.css'
import { Application } from 'pixi.js';
import { Player } from './player';
import { Entities, Entity } from './entity';
import { Controller } from './controller';
import { randomIntRange } from './utils';

const WIDTH = 640;
const HEIGHT = 480;

export const Game = new Application({ width: WIDTH, height: HEIGHT });
document.body.appendChild(Game.view);

Controller.init();
const player = new Player(64,64);

for (let i = 0; i < 5; i++) {
    new Entity(
        randomIntRange(0,300),
        randomIntRange(0,200),
    );
}

Game.ticker.add((delta) => {
    Entities.forEach(e => {
        e.update(); 
        e.draw();
    });
})