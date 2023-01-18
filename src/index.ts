import './style.css'
import { Application } from 'pixi.js';
import { Player } from './world/entities/player';
import { Entities } from './world/entities/entity';
import { Controller } from './meta/controller';
import { WIDTH, HEIGHT } from './config';
import { Level } from './world/map/level';
import { drunkenWalk } from './world/map/generation/drunkenWalk';

// game setup

export const Game = new Application({ width: WIDTH, height: HEIGHT });
document.getElementById('container')?.appendChild(Game.view);

Controller.init();
const level = new Level(drunkenWalk);

Game.ticker.add((delta) => {
    Entities.forEach(e => {
        e.update(); 
        e.draw();
    });
})