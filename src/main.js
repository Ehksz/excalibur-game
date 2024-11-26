import "./style.css";
import { DisplayMode, Engine } from "excalibur";
import { loader } from "./resources";

class Game extends Engine {
  constructor() {
    super({
      width: 1920,
      height: 1080,
      displayMode: DisplayMode.FitScreen,
    });
  }

  initialize() {
    this.start(loader);
  }
}

export const game = new Game();
game.initialize();
