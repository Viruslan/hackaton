import { Module } from "../core/module";

export class ClicksModule extends Module {
    constructor(type, text){
        super(type, text)
        this.input = document.createElement('input');
        this.input.name = 'countTime';
        this.input.type = 'number';
        this.input.className=('selectTime');
        this.input.setAttribute('placeholder','Введите количество секунд')

        this.button = document.createElement('button');
        this.button.type = 'submit';
        this.button.textContent= 'Начать';
        this.button.className=('selectTimeButton');

        this.form = document.createElement('form');
        this.form.className=('modal-content')
        this.form.append(this.input, this.button);
        this.modalBackground = document.createElement('div');
        this.modalBackground.className=('modal')
        this.modalBackground.append(this.form)
        this.spanRes = document.createElement('div');
        this.spanRes.className= ('spanResult')
        this.body = document.body;

    }
    trigger(){
        this.spanRes?.remove()
        this.body.append(this.modalBackground)
        this.form.addEventListener('submit',(e)=>{
            e.preventDefault()
            let countTime = Number(e.target.elements.countTime.value)
            this.modalBackground.remove()
            this.counter(countTime)
        })
    }
    counter(countTime){
        let count = 0
        this.counterDiv = document.createElement('div')
        this.counterDiv.className = ('counterDiv')
        this.body.append(this.counterDiv)
        this.body.addEventListener('click',(e)=>{
            count++
            this.counterDiv.textContent = `Количество кликов за ${countTime} секунд: ${count}`;
        })
        const res = setTimeout(()=>{
            this.counterDiv.remove()
            this.spanRes.textContent = `Ваш результат ${count} кликов!`
            count=0;
            this.body.append(this.spanRes)
            setTimeout(()=>{
                this.spanRes.remove()
            },3000)
        },countTime*1000)
    }
}

