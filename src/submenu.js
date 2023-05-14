import { Menu } from "./core/menu";
import { DeveloperModule } from "./modules/developer.module";

export class SubMenu extends Menu {
  constructor() {
    super(".submenu");
    this.ruslan = new DeveloperModule("developers", "Руслан Песегов");
    this.stanislav = new DeveloperModule("developers", "Станислав Гурущук");
    this.peter = new DeveloperModule("developers", "Пётр Хмель");
    this.andrey = new DeveloperModule("developers", "Андрей Козлов");
    this.kirill = new DeveloperModule("developers", "Кирилл Мазнов");
  }
  open() {
    this.close();
    setTimeout(() => {
      this.add(this.ruslan);
      this.add(this.stanislav);
      this.add(this.peter);
      this.add(this.andrey);
      this.add(this.kirill);
    });
  }
  add(moduleName) {
    this.el.innerHTML += moduleName.toHTML();
  }
  close() {
    this.el.innerHTML = "";
  }
}
