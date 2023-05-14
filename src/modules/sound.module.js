import { Module } from '../core/module';
import { random } from '../utils';

export class SoundModule extends Module {

  #audioElement;
  #sourceElement;
  #soundLibrary;

  constructor(type, text) {
    super(type, text);
    this.#soundLibrary = [
      'http://codeskulptor-demos.commondatastorage.googleapis.com/pang/arrow.mp3',
      'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/Zombie.mp3',
      'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/spring.mp3',
      'http://codeskulptor-demos.commondatastorage.googleapis.com/descent/bomb.mp3',
      'https://soundbible.com/grab.php?id=2026&type=mp3',
      'https://soundbible.com/grab.php?id=1312&type=mp3',
      'https://soundbible.com/grab.php?id=1778&type=mp3',
      'https://soundbible.com/grab.php?id=722&type=mp3',
      'https://soundbible.com/grab.php?id=1929&type=mp3',
      'https://soundbible.com/grab.php?id=1140&type=mp3',
      'https://soundbible.com/grab.php?id=2063&type=mp3',
      'https://soundbible.com/grab.php?id=558&type=mp3',
      'https://soundbible.com/grab.php?id=1483&type=mp3',
      'https://soundbible.com/grab.php?id=1145&type=mp3'
    ];
  }

  #addAudioElementToPage() {
    document.querySelector('audio')?.remove();
    this.#audioElement = document.createElement('audio');
    this.#sourceElement = document.createElement('source');
    this.#sourceElement.type = 'audio/mpeg';
    this.#audioElement.append(this.#sourceElement);
    this.#sourceElement.src = this.#soundLibrary.at(random(0, this.#soundLibrary.length - 1));
    document.body.append(this.#audioElement);
    return this.#audioElement;
  }

  trigger() {
    this.#addAudioElementToPage().play();
  }
}