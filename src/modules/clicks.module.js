import {Module} from '../core/module'
// const span = document.createElement('span');
// span.className('clicks')


export class ClicksModule extends Module {
    constructor(type, text){
        super(type, text)
        this.input = document.createElement('input');
        this.input.name = 'countTime';
        this.input.type = 'number';
        this.input.className=('selectTime');

        this.button = document.createElement('button');
        this.button.type = 'submit';
        this.button.textContent= 'Начать';

        this.form = document.createElement('form');
        this.form.append(this.input, this.button);

        this.spanRes = document.createElement('div');
        this.spanRes.className= ('spanResult')
        this.body = document.body;
    }
    trigger(){
        this.spanRes?.remove()
        this.body.append(this.form)
        this.form.addEventListener('submit',(e)=>{
            e.preventDefault()
            let countTime = Number(e.target.elements.countTime.value)
            this.form.remove()
            this.counter(countTime)
        })
    }
    counter(countTime){
        this.counterDiv = document.createElement('div')
        this.counterDiv.className = ('countd')
        let count = 0
        this.body.append(this.counterDiv)
        this.body.addEventListener('click',(e)=>{
            count++
            this.counterDiv.textContent = `Количество кликов за ${countTime} секунд: ${count}`;
        })
        const res = setTimeout(()=>{
            this.counterDiv.remove()
            this.spanRes.textContent = `Ваш результат ${count} кликов`
            count=0;
            this.body.append(this.spanRes)
        },countTime*1000)
    }
}