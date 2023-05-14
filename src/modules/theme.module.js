import { Module } from '../core/module';

export class ThemeModule extends Module {
  
  #style;
  #css;
  #isDarkTheme;

  constructor(type, text) {
    super(type, text);
    this.#isDarkTheme = true;
    this.#style = document.createElement('style');
    this.#css = '.submenu {background: #f7f7f7; color: #525252; border: 1px solid #9d9d9d}'
      + ' .menu {background: #f7f7f7; color: #525252; border: 1px solid #9d9d9d}' 
      + ' .start {background-color: #f7f7f7; border: 1px solid #9d9d9d; color: #525252;}' 
      + ' .selectTimeButton {background: #f7f7f7; border: 1px solid #9d9d9d; color: #525252;};';
  }

  trigger() {
    this.#isDarkTheme = !this.#isDarkTheme;
    if (!this.#isDarkTheme) {
      this.#style.appendChild(document.createTextNode(this.#css));
      document.querySelector('head').append(this.#style);
    } else {
      this.#style.remove();
    }
  }
}