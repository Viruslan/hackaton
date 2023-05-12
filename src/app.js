import './styles.css'
import { ContextMenu } from "./menu";

const context = new ContextMenu('.menu');
document.body.addEventListener('contextmenu',(e)=>{
    e.preventDefault();
    context.open();
      
})