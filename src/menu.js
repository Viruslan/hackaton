import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ExitModule } from "./modules/exit.module";
import { TimerCount } from "./modules/timer.count";
import { RandomPhraseModule } from "./modules/random.phrase.module";
import { RandomShape } from "./modules/random.shape.module";
import { ThemeModule } from "./modules/theme.module";
import { SoundModule } from "./modules/sound.module";
import { DevelopersModule } from "./modules/developers.module";

export class ContextMenu extends Menu {
  constructor() {
    super(".menu");
    this.background = new BackgroundModule("background", "Поменять цвет");
    this.clicks = new ClicksModule("clicks", "Посчитать клики");
    this.exit = new ExitModule("exit", "Выход!");
    this.timer = new TimerCount("timer", "Обратный отсчет");
    this.sound = new SoundModule("sound", "Воспроизвести звук");
    this.randomShape = new RandomShape("randomShape", "Нарисовать фигуру");
    this.randomPhrase = new RandomPhraseModule(
      "randomPhrase",
      "Генератор фраз"
    );
    this.theme = new ThemeModule("theme", "Сменить тему");
    this.position = 0;
    this.developers = new DevelopersModule("developers", "Разработчики");

    this.el.addEventListener("click", (e) => {
      if (
        e.target.dataset.type !== "developers" &&
        e.target.classList[1] !== "developer"
      ) {
        this[e.target.dataset.type].trigger();
        this.close();
      }
    });
    this.el.addEventListener("mouseover", (e) => {
      if (e.target.dataset.type === "developers") {
        this.developers.trigger(e.target, this.position);
      }
    });
  }
  close() {
    this.el.className = "menu";
    this.el.innerHTML = "";
  }
  open(e) {
    this.close();
    let pointerW = e.clientX;
    let pointerH = e.clientY;
    let windH = window.innerHeight;
    let windW = window.innerWidth;
    if (windW - pointerW < 150 && windH - pointerH < 353) {
      this.el.style.top = `${e.clientY - 353}px`;
      this.el.style.left = `${e.clientX - 150}px`;
      this.position = 3;
    } else if (windW - pointerW < 150) {
      this.el.style.top = `${e.clientY}px`;
      this.el.style.left = `${e.clientX - 150}px`;
      this.position = 2;
    } else if (windH - pointerH < 353) {
      this.el.style.top = `${e.clientY - 353}px`;
      this.el.style.left = `${e.clientX}px`;
      this.position = 1;
    } else {
      this.el.style.top = `${e.clientY}px`;
      this.el.style.left = `${e.clientX}px`;
      this.position = 0;
    }
    setTimeout(() => {
      this.el.classList.add("open");
    }, 150);

    this.add(this.background);
    this.add(this.clicks);
    this.add(this.randomPhrase);
    this.add(this.sound);
    this.add(this.timer);
    this.add(this.randomShape);
    this.add(this.theme);
    this.add(this.developers);
    this.add(this.exit);
  }

  add(moduleName) {
    this.el.innerHTML += moduleName.toHTML();
  }
}
