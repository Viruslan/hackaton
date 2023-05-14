import { Module } from '../core/module';

export class ThemeModule extends Module {
  
  #menu;
  
  #isDarkTheme;

  constructor(type, text) {
    super(type, text);
    this.#menu = document.querySelector('.menu');
    this.#isDarkTheme = true;
  }

  trigger() {
    this.#isDarkTheme = !this.#isDarkTheme;
    if (!this.#isDarkTheme) {
      this.#menu.style.background = '#f7f7f7';
      this.#menu.style.border = '1px solid #9d9d9d';
      this.#menu.style.color = '#525252';
    } else {
      this.#menu.style.background = '#1b1a1a';
      this.#menu.style.border = 'none';
      this.#menu.style.color = '#eee';
    }
  }
}