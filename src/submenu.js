import { Menu } from "./core/menu";
import { DeveloperModule } from "./modules/developer.module";

export class SubMenu extends Menu {
  constructor() {
    super(".submenu");
    this.ruslan = new DeveloperModule("ruslan", "Руслан Песегов", "developer");
    this.stanislav = new DeveloperModule(
      "stanislav",
      "Станислав Гурущук",
      "developer"
    );
    this.peter = new DeveloperModule("peter", "Пётр Хмель", "developer");
    this.andrey = new DeveloperModule("andrey", "Андрей Козлов", "developer");
    this.kirill = new DeveloperModule("kirill", "Кирилл Мазнов", "developer");
  }
  open() {
    this.close();
    this.add(this.ruslan);
    this.add(this.stanislav);
    this.add(this.peter);
    this.add(this.andrey);
    this.add(this.kirill);
  }
  add(moduleName) {
    this.el.innerHTML += moduleName.toHTML();
  }
  close() {
    this.el.innerHTML = "";
  }
}
