import * as PIXI from 'pixi.js';
import Scene from './scene';
import Manager from './manager';
import Text from './text';
import Load from './load';
import Sound from './sound';

export default class Scene1 {
  constructor(scene: Scene) {
    scene = new Scene([
        PIXI.Texture.from('./assets/background1.jpg')
      ]
    );
    Scene.appendScene(scene);
    scene.sprite[0].scale.x = Manager.game.screen.width / 511;
    scene.sprite[0].scale.y = Manager.game.screen.height / 340;

    Text.appendText('---GAME PLAY---', 0, 50, 375, 300, scene);

    Text.transitionText[0].on('pointerdown', () => {
      if(Scene.destroyScene(scene)) { setTimeout(() => { new Load(Manager.scene, Sound.bgm); }, 600); }
    });
  }
}