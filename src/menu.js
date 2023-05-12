import { Menu } from "./core/menu";
import { BackgroundModule } from "./modules/background.module";
import { ClicksModule } from "./modules/clicks.module";
export class ContextMenu extends Menu {
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
    this.add(BackgroundModule, "BackgroundModule", "Поменять цвет");
    this.add(ClicksModule, "ClicksModule", "Счетчик кликов");
  }

  add(moduleName, type, text) {
    const module = new moduleName(type, text);
    this.el.innerHTML += module.toHTML();
  }
}
