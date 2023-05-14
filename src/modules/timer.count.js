export class TimerCount {
  constructor() {
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
    timerBlock.textContent = 0;
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
}
