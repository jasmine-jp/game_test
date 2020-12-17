import * as PIXI from 'pixi.js';
import Scene from './scene';
import Manager from './manager';
import Text from './text';
import Load from './load';
import Sound from './sound';

export default class Scene1 {
  constructor() {
    Scene.appendScene([
        PIXI.Texture.from('./assets/background1.jpg')
      ]
    );
    Scene.sprite[0].scale.x = Manager.game.screen.width / 511;
    Scene.sprite[0].scale.y = Manager.game.screen.height / 340;

    Text.appendText('---GAME PLAY---', 0, 50, 375, 300);

    Text.transitionText[0].on('pointerdown', () => {
      if(Scene.destroyScene()) { setTimeout(() => { new Load(Sound.bgm); }, 600); }
    });
  }
}