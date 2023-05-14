import { Module } from "../core/module";
import { SubMenu } from "../submenu";

export class DevelopersModule extends Module {
  constructor(type, text) {
    super(type, text);
    this.menuList = document.createElement("ul");
    this.menuList.className = "submenu";
    this.menuList.id = "submenu";
  }
  trigger(e) {
    e.append(this.menuList);
    const submenu = new SubMenu();
    submenu.open();
    e.addEventListener("mouseleave", (e) => {
      this.close();
    });
  }
  close() {
    this.menuList.remove();
  }
}
