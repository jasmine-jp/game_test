import * as PIXI from 'pixi.js';
import PIXI_SOUND from 'pixi-sound';
import Scene from './scene';
import Scene2 from './scene2';
import Sound from './sound';

export default class Load {
  constructor(bgm: PIXI_SOUND.Sound) {
    Scene.appendScene([
      PIXI.Texture.from('./assets/load.png')
      ]
    );
    Scene.sprite[0].x = 750;
    Scene.sprite[0].y = 413;

    if (bgm.isLoaded) {
      if(Scene.destroyScene()) { setTimeout(() => { new Scene2(); }, 600); }
      Sound.decideNote(bgm);
    }
  }
}