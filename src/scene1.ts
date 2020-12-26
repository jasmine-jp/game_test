import * as PIXI from 'pixi.js';
import Scene from './scene';
import Manager from './manager';
import Text from './text';
import Load from './load';
import Sound from './sound';
import Graphic from './graphic';
import Scene1Manager from './scene1Manager';

export default class Scene1 {
  constructor() {
    Scene.appendScene([
        PIXI.Texture.from('./assets/background1.jpg'),
        PIXI.Texture.from('./assets/maru.png')
      ]
    );
    Scene.sprite[0].scale.x = Manager.game.screen.width / 511;
    Scene.sprite[0].scale.y = Manager.game.screen.height / 340;
    Scene.sprite[1].scale.x = 0.2; Scene.sprite[1].scale.y = 0.2;
    Scene.sprite[1].anchor.x = 0.5; Scene.sprite[1].anchor.y = 0.5;
    Scene.sprite[1].x = 474; Scene.sprite[1].y = 510;

    Text.appendText('---GAME PLAY---', 0, 50, 375, 400);
    Graphic.appendGraphic(0, 0xffffff, 374, 500, 400, 10);

    Scene1Manager.spriteEnableMove(1);
    Graphic.appendCloneGraphic(0, 0, 374, 500);

    Text.transitionText[0].on('pointerdown', () => {
      if(Scene.destroyScene()) { setTimeout(() => { new Load(Sound.bgm); }, 600); }
    });
  }
}