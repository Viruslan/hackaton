import { Module } from "../core/module";

export class DeveloperModule extends Module {
  constructor(type, text, subclass) {
    super(type, text);
    this.subclass = subclass;
  }

  trigger() {
   
  }
  toHTML() {
    return `<li class="menu-item ${this.subclass}" data-type="${this.type}">${this.text}</li>`;
  }
}
