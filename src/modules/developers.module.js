import { Module } from "../core/module";
import { SubMenu } from "../submenu";

export class DevelopersModule extends Module {
  constructor(type, text) {
    super(type, text);

    this.menuList = document.createElement("ul");
    this.menuList.className = "submenu";
    this.menuList.id = "submenu";
  }
  trigger(e, position) {
    e.append(this.menuList);
    const submenu = new SubMenu();
    submenu.open();
    console.log(position);
    if (position === 0) {
      this.menuList.style.top = "0";
      this.menuList.style.left = "140px";
    } else if (position === 1) {
      this.menuList.style.top = "-159px";
      this.menuList.style.left = "140px";
    } else if (position === 2) {
      this.menuList.style.top = "0";
      this.menuList.style.left = "-150px";
    } else if (position === 3) {
      this.menuList.style.top = "-159px";
      this.menuList.style.left = "-150px";
    }

    e.addEventListener("mouseleave", (e) => {
      this.close();
    });
  }
  close() {
    this.menuList.remove();
  }
}
