import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
export class ContextMenu extends Menu {
  constructor() {
    super(".menu");
    this.background = new BackgroundModule("BackgroundModule", "Поменять цвет");
    this.clicks = new ClicksModule("ClicksModule", "Посчитать клики");
    this.el.addEventListener("click", (e) => {
      // this.background.trigger();
      if (e.target.dataset.type === "BackgroundModule") {
        this.background.trigger();
        this.close();
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
    // this.add(ClicksModule, "ClicksModule", "Счетчик кликов");
  }

  add(moduleName) {
    this.el.innerHTML += moduleName.toHTML();
  }
}
