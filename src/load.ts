import * as PIXI from 'pixi.js';
import PIXI_SOUND from 'pixi-sound';
import Scene from './scene';
import Manager from './manager';
import Scene2 from './scene2';
import Sound from './sound';

export default class Load {
  constructor(scene: Scene, bgm: PIXI_SOUND.Sound) {
    scene = new Scene([
      PIXI.Texture.from('./assets/load.png')
      ]
    );
    Scene.appendScene(scene);
    scene.sprite[0].x = 750;
    scene.sprite[0].y = 413;

    if (bgm.isLoaded) {
      if(Scene.destroyScene(scene)) { setTimeout(() => { new Scene2(Manager.scene); }, 600); }
      Sound.decideNote(bgm);
    }
  }
}