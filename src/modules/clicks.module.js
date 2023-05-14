import { Module } from "../core/module";

export class ClicksModule extends Module {
  trigger() {
    let i = 0;
    console.log(i++);
  }
}
