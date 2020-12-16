import * as PIXI from 'pixi.js';
import Scene from './scene';
import Manager from './manager';
import Scene1 from './scene1';
import Text from './text';
import Scene2Manager from './scene2Manager';
import Sound from './sound';

export default class Scene2 {
  private hoge = true;

  constructor(scene: Scene) {
    scene = new Scene([
        PIXI.Texture.from('./assets/background1.jpg')
      ]
    );
    Scene.appendScene(scene);
    scene.sprite[0].scale.x = Manager.game.screen.width / 1024;
    scene.sprite[0].scale.y = Manager.game.screen.height / 719;

    Text.appendText('---PAUSE---', 0, 50, 125, 500, scene);
    Text.appendText('---AGAIN---', 1, 50, 425, 500, scene);
    Text.appendText('---BACK---', 2, 50, 725, 500, scene);

    Scene2Manager.appendBoard(scene);

    Sound.bgm.play();

    Text.transitionText[0].on('pointerdown', () => {
      if (this.hoge) {
        Sound.bgm.pause();
        Manager.ticker.stop();
        this.hoge = false;
      } else if (!this.hoge) {
        Sound.bgm.resume();
        Manager.ticker.start();
        this.hoge = true;
      }
    });
    Text.transitionText[1].on('pointerdown', () => {
      Sound.bgm.stop();
      Manager.ticker.stop();
      this.hoge = true;
      Scene2Manager.removeEvent();
      if(Scene.destroyScene(scene)) { setTimeout(() => { new Scene2(Manager.scene); }, 600); }
    });
    Text.transitionText[2].on('pointerdown', () => {
      Sound.bgm.stop();
      Manager.ticker.stop();
      this.hoge = true;
      Scene2Manager.removeEvent();
      if(Scene.destroyScene(scene)) { setTimeout(() => { new Scene1(Manager.scene); }, 600); }
    });
  }
}