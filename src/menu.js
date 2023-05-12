import { Menu } from "./core/menu";
import { getRandomColor } from "./utils";
export class ContextMenu extends Menu {

    open(){
        this.el.className = 'menu open';
    }
    close(){
        this.el.className = 'menu';
    }
    /* add(){

    } */
}
