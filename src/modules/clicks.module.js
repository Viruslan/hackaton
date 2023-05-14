import {Module} from '../core/module'
// const span = document.createElement('span');
// span.className('clicks')


export class ClicksModule extends Module {
    constructor(type, text){
        super(type, text)

        this.input = document.createElement('input')
        this.form = document.createElement('form')
        this.button = document.createElement('button')
        // this.input.setAttribute('name','countTime')
        this.input.name = 'countTime'
        this.input.type = 'number'
        this.button.type = 'submit'
        this.button.textContent= 'Go'
        this.form.append(this.input, this.button)
        this.spanRes = document.createElement('div')
        this.body = document.body
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
            console.log(res)
        })
        const res = setTimeout(()=>{
            this.counterDiv.remove()
            // console.log(count)
            console.log('fin')
            this.spanRes.textContent = `Ваш результат ${count} кликов`
            count=0;
        },countTime*1000)
        // this.spanRes.textContent = `Ваш результат ${count} кликов`
        setTimeout(()=>{
            this.body.append(this.spanRes)
        },countTime*1001)
        console.log(countTime)
    }
}