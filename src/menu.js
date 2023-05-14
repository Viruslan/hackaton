import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ExitModule } from "./modules/exit.module";
import { SoundModule } from "./modules/sound.module";
import { DevelopersModule } from "./modules/developers.module";

export class ContextMenu extends Menu {
  constructor() {
    super(".menu");
    this.background = new BackgroundModule("background", "Поменять цвет");
    this.clicks = new ClicksModule("clicks", "Посчитать клики");
    this.sound = new SoundModule("sound", "Воспроизвести звук");
    this.exit = new ExitModule("exit", "Poof!");
    this.developers = new DevelopersModule("developers", "Разработчики");
    this.el.addEventListener("click", (e) => {
      if (e.target.dataset.type !== "developers") {
        this[e.target.dataset.type].trigger();
        this.close();
      }
    });
    document.body.addEventListener("mouseover", (e) => {
      if (e.target.dataset.type === "developers") this.developers.trigger();
    });
    document.body.addEventListener("mouseout", (e) => {
      if (e.target.dataset.type === "developers") {
        this.developers.close();
      }
    });
  }
  close() {
    this.el.className = "menu";
    this.el.innerHTML = "";
  }
  open(e) {
    this.close();
    this.el.style.top = `${e.clientY}px`;
    this.el.style.left = `${e.clientX}px`;
    setTimeout(() => {
      this.el.classList.add("open");
    }, 100);

    this.add(this.background);
    this.add(this.clicks);
    this.add(this.sound);
    this.add(this.exit);
    this.add(this.developers);
  }

  add(moduleName) {
    this.el.innerHTML += moduleName.toHTML();
  }
}
