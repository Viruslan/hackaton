import "./styles.css";
import { ContextMenu } from "./menu";
import { TimerCount } from "./modules/timer.count";
const context = new ContextMenu();
document.body.addEventListener("contextmenu", (e) => {
  e.preventDefault();
  context.open(e);
});

const timerCount = new TimerCount();
timerCount.startInputBlock();

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
    timerCount.createTimerBlock();
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
      timerCount.createCompletionMessage();
    }, textNumber * 1000);

    setTimeout(() => {
      const isCompletedMessage = document.querySelector(".completed-message");
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
