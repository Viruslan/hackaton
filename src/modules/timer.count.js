import { Module } from "../core/module";

export class TimerCount extends Module {
  constructor(type, text) {
    super(type, text);
    this.inputBlock = document.createElement("div");
    this.inputBlock.className = "block-input";
    this.inputText = document.createElement("input");
    this.inputText.className = "input-text";
    this.inputText.type = "text";
    this.inputText.placeholder = "Timer";
    this.button = document.createElement("button");
    this.button.className = "start";
    this.button.textContent = "пуск";
  }

  startInputBlock() {
    this.inputBlock.append(this.button);
    document.body.append(this.inputText, this.inputBlock);
    return this.inputBlock;
  }

  createTimerBlock() {
    const timerBlock = document.createElement("div");
    timerBlock.className = "timer-block";
    timerBlock.type = "text";
    // timerBlock.textContent = 0;
    document.body.append(timerBlock);
    return timerBlock;
  }

  createCompletionMessage() {
    const completedMessage = document.createElement("div");
    completedMessage.className = "completed-message";
    completedMessage.textContent = "Время истекло";
    document.body.append(completedMessage);
    return completedMessage;
  }

  trigger() {
    this.startInputBlock();

    const button = document.querySelector(".start");
    const text = document.querySelector(".input-text");

    let interval;
    let timer;
    let timout;

    button.addEventListener("click", () => {
      let textNumber = text.value;
      textNumber = Number(textNumber);
      if (!!timer) {
        timer.remove();
      }

      if (textNumber !== 0 && textNumber > 0) {
        this.createTimerBlock();
        timer = document.querySelector(".timer-block");
        timer.innerHTML = textNumber;
        clearInterval(interval);
        interval = setInterval(function startTimer() {
          if (timer.innerHTML > 0) {
            timer.innerHTML--;
          }
        }, 1000);

        clearTimeout(timout);
        timout = setTimeout(() => {
          this.createCompletionMessage();
        }, textNumber * 1000);

        setTimeout(() => {
          const isCompletedMessage =
            document.querySelector(".completed-message");
          if (isCompletedMessage) {
            isCompletedMessage.remove();
            timer.remove();
            text.value = "";
          }
        }, textNumber * 1000 + 2000);
      } else if (textNumber === 0 || textNumber < 0) {
        text.value = "";
        alert("НЕКОРРЕКТНЫЙ ВВОД");
      }
    });
  }
}
