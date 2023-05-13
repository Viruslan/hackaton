import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
import { ExitModule } from "./modules/exit.module";
export class ContextMenu extends Menu {
  constructor() {
    super(".menu");
    this.background = new BackgroundModule("background", "Поменять цвет");
    this.clicks = new ClicksModule("clicks", "Посчитать клики");
    this.exit = new ExitModule("exit", "Poof!");
    this.el.addEventListener("click", (e) => {
      this[e.target.dataset.type].trigger();
      this.close();
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
    this.add(this.exit);
  }

  add(moduleName) {
    this.el.innerHTML += moduleName.toHTML();
  }
}
