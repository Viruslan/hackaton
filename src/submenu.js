import { Menu } from "./core/menu";
import { DeveloperModule } from "./modules/developer.module";

export class SubMenu extends Menu {
  constructor() {
    super(".submenu");
    this.ruslan = new DeveloperModule("developer", "Руслан Песегов");
    this.stanislav = new DeveloperModule("developer", "Станислав Гурущук");
    this.peter = new DeveloperModule("developer", "Пётр Хмель");
    this.andrey = new DeveloperModule("developer", "Андрей Козлов");
    this.kirill = new DeveloperModule("developer", "Кирилл Мазнов");
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
