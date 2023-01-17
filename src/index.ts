import './style.css'
import { Application } from 'pixi.js';
import { Player } from './world/entities/player';
import { Entities } from './world/entities/entity';
import { Controller } from './meta/controller';
import { WIDTH, HEIGHT } from './config';

// game setup

export const Game = new Application({ width: WIDTH, height: HEIGHT });
document.body.appendChild(Game.view);

Controller.init();
const player = new Player(64,64);

Game.ticker.add((delta) => {
    Entities.forEach(e => {
        e.update(); 
        e.draw();
    });
})