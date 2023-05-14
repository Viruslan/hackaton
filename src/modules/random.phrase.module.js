import { Module } from "../core/module";
import { getRandomIndex, URL } from "../utils";

export class RandomPhraseModule extends Module {
  renderPhrase(phrase) {
    const phraseDiv = document.createElement("div");
    phraseDiv.innerText = phrase;
    phraseDiv.className = "phrase-module";
    document.body.append(phraseDiv);
    setTimeout(() => {
      document.querySelector(".phrase-module").remove();
    }, 5000);
  }

  async getRandomPhrase() {
    try {
      const phrases = await fetch(URL);
      const response = await phrases.json();
      const index = getRandomIndex(response.length);
      return response[index].text;
    } catch (error) {
      alert(error);
    }
  }

  async trigger() {
    try {
      if (document.querySelector(".phrase-module") !== null) {
        return null;
      }
      const result = await this.getRandomPhrase();
      if (result !== "") {
        this.renderPhrase(result);
      }
    } catch (error) {
      alert(error);
    }
  }
}
