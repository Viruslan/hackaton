import { Module } from "../core/module";
import { getRandomColor, getRandomNumber } from "../utils";

export class RandomShape extends Module {
  constructor(type, text) {
    super(type, text);
    this.shape = document.createElement("div");
    this.shape.className = "shape";
  }
  createRandomShape() {
    const { width, height } = document.body.getBoundingClientRect();
    console.log(width, height);
    const shapeSize = getRandomNumber(50, 500);
    const x = getRandomNumber(0, width - shapeSize);
    const y = getRandomNumber(0, height - shapeSize);
    this.shape.innerHTML = "<p>Ткни меня</p>";
    this.shape.style.width = `${shapeSize}px`;
    this.shape.style.height = `${shapeSize}px`;
    this.shape.style.top = `${y}px`;
    this.shape.style.left = `${x}px`;
    this.shape.style.background = getRandomColor();
    this.shape.style.borderRadius = `${getRandomNumber(0, shapeSize)}px`;
    document.body.append(this.shape);
    this.shape.addEventListener("click", (e) => {
      if (e.target === this.shape) {
        this.removeShape();
      }
    });
  }
  removeShape() {
    this.shape.remove();
  }
  trigger() {
    this.createRandomShape();
  }
}
